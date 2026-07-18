import ExpoModulesCore
import AppKit
import React
import React_RCTAppDelegate

public class PopoverAppDelegateSubscriber: ExpoAppDelegateSubscriber, NSPopoverDelegate {

  private var statusItem: NSStatusItem!
  private var popover: NSPopover!

  // Menu-bar count text and the urgency dot color (D15). Kept so either can
  // update independently and the title is rebuilt from both.
  private var currentText: String = ""
  private var currentTint: NSColor?

  public func applicationDidFinishLaunching(_ notification: Notification) {
    // SDK 56 removed Expo's shared `ReactNativeFactoryProvider`. This pod can't import the app
    // target's AppDelegate, so read its `@objc reactNativeFactory` via KVC (single-process app).
    guard let factory = (NSApp.delegate as? NSObject)?.value(forKey: "reactNativeFactory") as? RCTReactNativeFactory else {
      NSLog("PopoverAppDelegateSubscriber: could not read reactNativeFactory from NSApp.delegate; popover not initialized")
      return
    }

    let rootView = factory.rootViewFactory.view(
      withModuleName: "main",
      initialProperties: [:],
      launchOptions: notification.userInfo
    )

    statusItem = NSStatusBar.system.statusItem(withLength: NSStatusItem.variableLength)
    if let button = statusItem.button {
      let image = NSImage(named: "PullRequest")
      image?.size = NSSize(width: 20, height: 20)
      image?.isTemplate = true
      image?.prefersColorMatch = true
      button.image = image
      button.target = self
      button.action = #selector(onPressStatusItem(_:))
      button.sendAction(on: [.leftMouseUp, .rightMouseUp])
    }

    let rootViewController = NSViewController()
    rootViewController.view = rootView

    popover = NSPopover()
    popover.contentSize = NSSize(width: 700, height: 500)
    popover.contentViewController = rootViewController
    popover.behavior = .transient
    popover.delegate = self
    popover.appearance = NSAppearance(named: .darkAqua)

    registerObservers()

    let em = NSAppleEventManager.shared()
    em.setEventHandler(
      self,
      andSelector: #selector(getUrl(_:withReplyEvent:)),
      forEventClass: AEEventClass(kInternetEventClass),
      andEventID: AEEventID(kAEGetURL)
    )

    NSApp.activate(ignoringOtherApps: true)
  }

  // MARK: - NSPopoverDelegate

  @objc public func popoverDidClose(_ notification: Notification) {
    PopoverModule.shared?.emitPopoverState("Closed")
  }

  @objc public func popoverWillShow(_ notification: Notification) {
    PopoverModule.shared?.emitPopoverState("Opened")
  }

  // MARK: - URL handling

  @objc public func getUrl(_ event: NSAppleEventDescriptor, withReplyEvent reply: NSAppleEventDescriptor) {
    if let button = statusItem?.button {
      popover.show(relativeTo: button.bounds, of: button, preferredEdge: .minY)
    }
    RCTLinkingManager.getUrlEventHandler(event, withReplyEvent: reply)
  }

  // MARK: - Popover control

  @objc private func openPopover() {
    guard let button = statusItem?.button else { return }
    popover.show(relativeTo: button.bounds, of: button, preferredEdge: .minY)
    popover.contentViewController?.view.window?.makeKey()
  }

  private func closePopover() {
    popover.close()
  }

  private func registerObservers() {
    let nc = NotificationCenter.default
    nc.addObserver(forName: Notification.Name("GitBar-OpenPopover"), object: nil, queue: nil) { [weak self] _ in
      self?.openPopover()
    }
    nc.addObserver(forName: Notification.Name("GitBar-ClosePopover"), object: nil, queue: nil) { [weak self] _ in
      self?.closePopover()
    }
    nc.addObserver(self, selector: #selector(setStatusItemText(_:)), name: Notification.Name("GitBar-SetStatusItemText"), object: nil)
    nc.addObserver(self, selector: #selector(setStatusItemTint(_:)), name: Notification.Name("GitBar-SetStatusItemTint"), object: nil)
  }

  @objc private func setStatusItemText(_ notification: NSNotification) {
    guard let userInfo = notification.userInfo as? [String: Any],
          let text = userInfo["text"] as? String else { return }
    currentText = text
    updateStatusItemTitle()
  }

  @objc private func setStatusItemTint(_ notification: NSNotification) {
    guard let userInfo = notification.userInfo as? [String: Any],
          let hex = userInfo["hex"] as? String else { return }
    currentTint = Self.color(fromHex: hex)
    updateStatusItemTitle()
  }

  // Keeps the icon as a monochrome, appearance-adaptive template image and
  // shows a small colored dot next to the count when there is an urgent state.
  private func updateStatusItemTitle() {
    guard let button = statusItem?.button else { return }

    guard let tint = currentTint else {
      button.attributedTitle = NSAttributedString(string: currentText)
      return
    }

    let title = NSMutableAttributedString(
      string: "\u{25CF}",
      attributes: [
        .foregroundColor: tint,
        // Smaller than the count text and nudged up to vertically center.
        .font: NSFont.systemFont(ofSize: 9),
        .baselineOffset: 1,
      ]
    )
    title.append(NSAttributedString(string: " \(currentText)"))
    button.attributedTitle = title
  }

  private static func color(fromHex hex: String) -> NSColor? {
    var value = hex.trimmingCharacters(in: .whitespacesAndNewlines)
    guard value.hasPrefix("#") else { return nil }
    value.removeFirst()
    guard value.count == 6, let rgb = UInt32(value, radix: 16) else { return nil }
    return NSColor(
      red: CGFloat((rgb >> 16) & 0xFF) / 255,
      green: CGFloat((rgb >> 8) & 0xFF) / 255,
      blue: CGFloat(rgb & 0xFF) / 255,
      alpha: 1
    )
  }

  // MARK: - Status item click

  @objc private func onPressStatusItem(_ sender: Any?) {
    guard let event = NSApp.currentEvent else { return }

    if event.type == .rightMouseUp {
      statusItem.menu = createStatusMenu()
      statusItem.button?.performClick(nil)
      statusItem.menu = nil
      return
    }

    if popover.isShown {
      closePopover()
    } else {
      openPopover()
    }
  }

  private func createStatusMenu() -> NSMenu {
    let menu = NSMenu()
    let item = menu.addItem(withTitle: "Quit", action: #selector(quitApp), keyEquivalent: "q")
    item.target = self
    return menu
  }

  @objc private func quitApp() {
    NSApplication.shared.terminate(self)
  }
}
