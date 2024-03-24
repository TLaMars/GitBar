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
    var jsCodeLocation: URL

    #if !DEBUG
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

    popover.contentSize = NSSize(width: 600, height: 400)
    popover.animates = true
    popover.behavior = .transient
    popover.contentViewController = rootViewController

    statusBarItem = NSStatusBar.system.statusItem(withLength: NSStatusItem.variableLength)

    if let button = self.statusBarItem.button {
        button.action = #selector(togglePopover(_:))
        button.title = "GitBar"
    }

    eventMonitor = EventMonitor(mask: [.leftMouseDown, .rightMouseDown]) { [weak self] event in
        if let strongSelf = self, strongSelf.popover.isShown {
            strongSelf.closePopover(event)
        }
    }
    eventMonitor?.start()
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
}
