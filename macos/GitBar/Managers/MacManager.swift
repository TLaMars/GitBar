//
//  MacManager.swift
//  GitBar
//
//  Created by Thomas Lamars on 03/09/2024.
//

import Cocoa

enum MacEvents: String {
  case MacStateChange = "MacStateChange"
}

enum MacStateChange: String {
  case Locked = "Locked"
  case Unlocked = "Unlocked"
}

@objc(MacManager)
class MacManager: EventManager {
  
  override init() {
    super.init()
    DistributedNotificationCenter.default().addObserver(self, selector: #selector(handleScreenLocked(_:)), name: NSNotification.Name("com.apple.screenIsLocked"), object: nil)
    DistributedNotificationCenter.default().addObserver(self, selector: #selector(handleScreenUnlocked(_:)), name: NSNotification.Name("com.apple.screenIsUnlocked"), object: nil)
  }
    
  deinit {
    DistributedNotificationCenter.default().removeObserver(self, name: NSNotification.Name("com.apple.screenIsLocked"), object: nil)
    DistributedNotificationCenter.default().removeObserver(self, name: NSNotification.Name("com.apple.screenIsUnlocked"), object: nil)
  }
  
  override func supportedEvents() -> [String]? {
    [
      MacEvents.MacStateChange.rawValue
    ]
  }
  
  @objc
  func handleScreenLocked(_ notification: Notification) {
    sendEvent(withName: MacEvents.MacStateChange.rawValue, body: MacStateChange.Locked.rawValue)
  }

  @objc
  func handleScreenUnlocked(_ notification: Notification) {
    sendEvent(withName: MacEvents.MacStateChange.rawValue, body: MacStateChange.Unlocked.rawValue)
  }
}
