//
//  EventManager.swift
//  GitBar
//
//  Created by Thomas Lamars on 06/09/2024.
//

import Foundation

@objc(EventManager)
class EventManager: RCTEventEmitter {
  private var hasListeners: Bool = false
  
  override static func requiresMainQueueSetup() -> Bool {
    true
  }
  
  override func supportedEvents() -> [String]? {
    []
  }
  
  override func constantsToExport() -> [AnyHashable : Any]! {
    [:]
  }
  
  override func startObserving() {
    super.startObserving()
    print("Start observing")
    hasListeners = true
  }
  
  override func stopObserving() {
    super.stopObserving()
    print("Stop observing")
    hasListeners = false
  }
}
