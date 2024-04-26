//
//  AppDelegate.swift
//  gitbar-macOS
//
//  Created by Thomas Lamars on 23/03/2024.
//

import Foundation
import Cocoa
import UserNotifications

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate, UNUserNotificationCenterDelegate {
  var popover: NSPopover!
  var bridge: RCTBridge!
  var statusBarItem: NSStatusItem!
  var eventMonitor: EventMonitor?

  func applicationDidFinishLaunching(_ aNotification: Notification) {
    UNUserNotificationCenter.current().delegate = self
    // Set storage location for MMKV
    setStorageLocation()

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

  func showPopover() {
    if let button = statusBarItem.button {
      popover.show(relativeTo: button.bounds, of: button, preferredEdge: NSRectEdge.minY)
      popover.contentViewController?.view.window?.makeKey()
    }
    eventMonitor?.start()
  }

  @objc
  func togglePopover(_ sender: Any?) {
    if popover.isShown {
      closePopover(sender)
    } else {
      showPopover()
    }
  }
  
  @objc 
  public func getUrl(_ event: NSAppleEventDescriptor, withReplyEvent reply: NSAppleEventDescriptor) -> Void {
    if let button = statusBarItem.button {
      popover.show(relativeTo: button.bounds, of: button, preferredEdge: NSRectEdge.minY)
    }
    return RCTLinkingManager.getUrlEventHandler(event, withReplyEvent: reply)
  }
  
  func setStorageLocation() -> Void {
    // Get the bundle identifier
    guard let bundleIdentifier = Bundle.main.bundleIdentifier else {
        fatalError("Unable to retrieve bundle identifier")
    }

    // Get the Application Support directory path
    let paths = NSSearchPathForDirectoriesInDomains(.applicationSupportDirectory, .userDomainMask, true)
    guard let applicationSupportDirectory = paths.first else {
        fatalError("Unable to locate Application Support directory")
    }
    
    // Create a folder for your app within Application Support
    let appSupportSubfolder = (applicationSupportDirectory as NSString).appendingPathComponent(bundleIdentifier)

    // Ensure the directory exists
    let fileManager = FileManager.default
    if !fileManager.fileExists(atPath: appSupportSubfolder) {
        try? fileManager.createDirectory(atPath: appSupportSubfolder, withIntermediateDirectories: true, attributes: nil)
    }

    // Initialize MMKV with custom storage path
    let storagePath = (appSupportSubfolder as NSString).appendingPathComponent("mmkv")
    MMKV.initialize(rootDir: storagePath)
  }
  
  func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
    showPopover()
    completionHandler()
  }
  
}
