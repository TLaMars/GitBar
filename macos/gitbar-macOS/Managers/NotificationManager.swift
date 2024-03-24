//
//  NotificationManager.swift
//  gitbar-macOS
//
//  Created by Thomas Lamars on 24/03/2024.
//

import Foundation
import UserNotifications

@objc(NotificationManager)
class NotificationManager: NSObject {
  var notificationCenter: UNUserNotificationCenter
  
  override init() {
    self.notificationCenter = UNUserNotificationCenter.current()
  }
}
