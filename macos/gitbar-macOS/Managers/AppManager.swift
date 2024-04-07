//
//  AppManager.swift
//  gitbar-macOS
//
//  Created by Thomas Lamars on 07/04/2024.
//

import Foundation
import UserNotifications

@objc(AppManager)
class AppManager: NSObject {
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
      false
  }

  @objc
  func closeApp() {
    DispatchQueue.main.async {
      NSApplication.shared.terminate(nil)
    }
  }

  @objc
  func setStatusBarText(_ text: String) {
    DispatchQueue.main.async {
      let appDelegate = NSApp.delegate as? AppDelegate
      let statusBarItem = appDelegate?.statusBarItem
      let button = statusBarItem?.button
      button?.title = text
    }
  }
}
