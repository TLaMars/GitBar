import ExpoModulesCore
import UserNotifications
import AppKit

public class NotificationsAppDelegateSubscriber: ExpoAppDelegateSubscriber, UNUserNotificationCenterDelegate {

  public func applicationDidFinishLaunching(_ notification: Notification) {
    UNUserNotificationCenter.current().delegate = self
  }

  public func userNotificationCenter(
    _ center: UNUserNotificationCenter,
    didReceive response: UNNotificationResponse,
    withCompletionHandler completionHandler: @escaping () -> Void
  ) {
    NotificationCenter.default.post(
      name: NSNotification.Name("GitBar-OpenPopover"),
      object: nil
    )
    completionHandler()
  }
}
