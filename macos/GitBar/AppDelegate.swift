//
//  AppDelegate.swift
//  GitBar
//
//  Created by Thomas Lamars on 11/09/2024.
//

import Foundation
import Cocoa

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate, RCTBridgeDelegate {
  
  var bridge: RCTBridge!
  var statusItem: NSStatusItem!
  var popover: NSPopover!
  
  func applicationDidFinishLaunching(_ notification: Notification) {
    bridge = RCTBridge(delegate: self, launchOptions: nil)
    
    statusItem = NSStatusBar.system.statusItem(withLength: NSStatusItem.variableLength)
    if let button = statusItem.button {
      let image = NSImage(named: "PullRequest")
      image?.size = NSSize(width: 20, height: 20)
      image?.isTemplate = true
      image?.prefersColorMatch = true
      button.image = image
      button.action = #selector(onPressStatusItem(_:))
    }
    
    let rootView = RCTRootView(bridge: bridge, moduleName: "main", initialProperties: [:])
    let rootViewController = NSViewController()
    rootViewController.view = rootView
    
    popover = NSPopover()
    popover.contentSize = NSSize(width: 700, height: 500)
    popover.contentViewController = rootViewController
    popover.behavior = .transient
  }
  
  func sourceURL(for bridge: RCTBridge) -> URL? {
    #if DEBUG
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackExtension: nil)
    #else
    return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
    #endif
  }
  
  func openPopover() {
    popover.show(relativeTo: statusItem.button!.bounds, of: statusItem.button!, preferredEdge: .minY)
    popover.contentViewController?.view.window?.makeKey()
  }

  func closePopover() {
    popover.close()
  }
  
  @objc 
  func onPressStatusItem(_ sender: Any?) {
    if popover.isShown {
      closePopover()
    } else {
      openPopover()
    }
  }
}
