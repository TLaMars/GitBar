//
//  AppDelegate.swift
//  gitbar-macOS
//
//  Created by Thomas Lamars on 23/03/2024.
//

import Foundation
import Cocoa

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {
  var popover: NSPopover!
  var bridge: RCTBridge!
  var statusBarItem: NSStatusItem!
  var eventMonitor: EventMonitor?

  func applicationDidFinishLaunching(_ aNotification: Notification) {
    // Register fonts because they are not installed
    registerFonts(withFilenames: fontFilenames)

    var jsCodeLocation: URL
    
    #if DEBUG
      let fallbackURLProvider: () -> URL? = {
        return URL(string: "http://localhost:8081")
      }
      jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackURLProvider: fallbackURLProvider)
    #else
      jsCodeLocation = Bundle.main.url(forResource: "main", withExtension: "jsbundle")!
    #endif

    let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "gitbar", initialProperties: nil, launchOptions: nil)
    let rootViewController = NSViewController()
    rootViewController.view = rootView
    
    popover = NSPopover()
    
    popover.contentSize = NSSize(width: 700, height: 500)
    popover.animates = true
    popover.behavior = .transient
    popover.contentViewController = rootViewController
    
    
    statusBarItem = NSStatusBar.system.statusItem(withLength: NSStatusItem.variableLength)
    
    if let button = self.statusBarItem.button {
      let image = NSImage(named: "PullRequest")
      image?.size = NSSize(width: 20, height: 20)
      image?.isTemplate = true
      image?.prefersColorMatch = true
      button.action = #selector(togglePopover(_:))
      button.image = image
    }
    
    // Monitor to watch if user clicks outside popup
    eventMonitor = EventMonitor(mask: [.leftMouseDown, .rightMouseDown]) { [weak self] event in
      if let strongSelf = self, strongSelf.popover.isShown {
        strongSelf.closePopover(event)
      }
    }
    eventMonitor?.start()
  
    let em = NSAppleEventManager.shared()
    em.setEventHandler(self, andSelector: #selector(self.getUrl(_:withReplyEvent:)), forEventClass: AEEventClass(kInternetEventClass), andEventID: AEEventID(kAEGetURL))
  }

  func applicationWillTerminate(_ aNotification: Notification) {
    // Insert code here to tear down your application
    eventMonitor?.stop()
  }

  func closePopover(_ sender: Any?) {
    popover.performClose(sender)
    eventMonitor?.stop()
  }

  func showPopover(_ sender: Any?) {
    if let button = statusBarItem.button {
      popover.show(relativeTo: button.bounds, of: button, preferredEdge: NSRectEdge.minY)
      popover.contentViewController?.view.window?.makeKey()
    }
    eventMonitor?.start()
  }

  @objc func togglePopover(_ sender: Any?) {
    if popover.isShown {
      closePopover(sender)
    } else {
      showPopover(sender)
    }
  }
  
  @objc public func getUrl(_ event: NSAppleEventDescriptor, withReplyEvent reply: NSAppleEventDescriptor) -> Void {
    if let button = statusBarItem.button {
      popover.show(relativeTo: button.bounds, of: button, preferredEdge: NSRectEdge.minY)
    }
    return RCTLinkingManager.getUrlEventHandler(event, withReplyEvent: reply)
  }
  
}
