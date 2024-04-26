//
//  NotificationManager.swift
//  gitbar-macOS
//
//  Created by Thomas Lamars on 22/04/2024.
//

import UserNotifications
import Foundation
import React

enum NotificationEvents: String {
  case Tapped = "TappedEvent"
}


@objc(NotificationManager)
class NotificationManager: RCTEventEmitter {
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  override func supportedEvents() -> [String]? {
    return [
      NotificationEvents.Tapped.rawValue
    ]
  }
    
  @objc
  func requestPermissions() {
    let center = UNUserNotificationCenter.current()
    let options: UNAuthorizationOptions = [.alert, .sound, .badge]
    center.requestAuthorization(options: options) { granted, error in
      if !granted {
        NSLog("Notification permission denied")
      }
    }
  }

  @objc
  func checkPermissions(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
    let center = UNUserNotificationCenter.current()
    center.getNotificationSettings { settings in
      resolve(settings.authorizationStatus.rawValue)
    }
  }
    
  // Send a notification
  @objc
  func sendNotification(_ title: String, body: String, urlString: String) {
    let content = UNMutableNotificationContent()
    content.title = title
    content.body = body
    content.sound = .default
      
    // Add URL to notification
    content.userInfo = ["url": urlString]
      
    let request = UNNotificationRequest(identifier: UUID().uuidString, content: content, trigger: nil)
    UNUserNotificationCenter.current().add(request) { error in
      if let error = error {
        NSLog("Error sending notification: \(error.localizedDescription)")
      }
    }
  }
}
