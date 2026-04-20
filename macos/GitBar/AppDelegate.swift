//
//  AppDelegate.swift
//  GitBar
//
//  Created by Thomas Lamars on 11/09/2024.
//

import Foundation
import Cocoa
import UserNotifications
import Expo
import React
import ReactAppDependencyProvider

@main
class AppDelegate: ExpoAppDelegate, UNUserNotificationCenterDelegate, NSPopoverDelegate {

  var statusItem: NSStatusItem!
  var popover: NSPopover!

  var reactNativeDelegate: ExpoReactNativeFactoryDelegate?
  var reactNativeFactory: RCTReactNativeFactory?

  override func applicationDidFinishLaunching(_ notification: Notification) {
    UNUserNotificationCenter.current().delegate = self
    migrateMMKVToDocumentsIfNeeded()

    super.applicationDidFinishLaunching(notification)

    let delegate = ReactNativeDelegate()
    let factory = ExpoReactNativeFactory(delegate: delegate)
    delegate.dependencyProvider = RCTAppDependencyProvider()

    reactNativeDelegate = delegate
    reactNativeFactory = factory
    bindReactNativeFactory(factory)

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

    popoverObservers()

    let em = NSAppleEventManager.shared()
    em.setEventHandler(self, andSelector: #selector(self.getUrl(_:withReplyEvent:)), forEventClass: AEEventClass(kInternetEventClass), andEventID: AEEventID(kAEGetURL))

    NSApp.activate(ignoringOtherApps: true)
  }

  func createStatusMenu() -> NSMenu {
    let menu = NSMenu()
    menu.addItem(withTitle: "Quit", action: #selector(quitApp), keyEquivalent: "q")

    return menu
  }

  @objc
  func quitApp() {
    NSApplication.shared.terminate(self)
  }

  func popoverDidClose(_ notification: Notification) {
    RNEventEmitter.emitter.sendEvent(withName: "onPopoverState", body: [
      "state": "Closed"
    ])
  }

  func popoverWillShow(_ notification: Notification) {
    RNEventEmitter.emitter.sendEvent(withName: "onPopoverState", body: [
      "state": "Opened"
    ])
  }

  @objc
  public func getUrl(_ event: NSAppleEventDescriptor, withReplyEvent reply: NSAppleEventDescriptor) -> Void {
    if let button = statusItem.button {
      popover.show(relativeTo: button.bounds, of: button, preferredEdge: NSRectEdge.minY)
    }
    return RCTLinkingManager.getUrlEventHandler(event, withReplyEvent: reply)
  }

  @objc
  func openPopover() {
    guard let button = statusItem.button else { return }
    popover.show(relativeTo: button.bounds, of: button, preferredEdge: .minY)
    popover.contentViewController?.view.window?.makeKey()
  }

  func closePopover() {
    popover.close()
  }

  func popoverObservers() {
    let notificationCenter = NotificationCenter.default
    notificationCenter.addObserver(forName: Notification.Name("GitBar-OpenPopover"), object: nil, queue: nil) { [weak self] _ in
      self?.openPopover()
    }
    notificationCenter.addObserver(forName: Notification.Name("GitBar-ClosePopover"), object: nil, queue: nil) { [weak self] _ in
      self?.closePopover()
    }
    notificationCenter.addObserver(self, selector: #selector(setStatusItemText(_:)), name: Notification.Name("GitBar-SetStatusItemText"), object: nil)
  }

  @objc
  func setStatusItemText(_ notification: NSNotification) {
    guard let userInfo = notification.userInfo as? [String: Any],
          let text = userInfo["text"] as? String else { return }

    statusItem.button?.title = text
  }

  @objc
  func onPressStatusItem(_ sender: Any?) {
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

  func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
    openPopover()
    completionHandler()
  }
}

class ReactNativeDelegate: ExpoReactNativeFactoryDelegate {
  override func sourceURL(for bridge: RCTBridge) -> URL? {
    bridge.bundleURL ?? bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }

  override func customize(_ rootView: RCTRootView) {
    rootView.backgroundColor = NSColor.black
  }
}
