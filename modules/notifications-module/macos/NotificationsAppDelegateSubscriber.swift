import ExpoModulesCore
import UserNotifications
import AppKit

public class NotificationsAppDelegateSubscriber: ExpoAppDelegateSubscriber, UNUserNotificationCenterDelegate {

  public func applicationDidFinishLaunching(_ notification: Notification) {
    UNUserNotificationCenter.current().delegate = self
  }

  // A menu-bar app counts as "active", so without this macOS would silently
  // swallow every banner while GitBar runs.
  public func userNotificationCenter(
    _ center: UNUserNotificationCenter,
    willPresent notification: UNNotification,
    withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void
  ) {
    completionHandler([.banner, .sound])
  }

  public func userNotificationCenter(
    _ center: UNUserNotificationCenter,
    didReceive response: UNNotificationResponse,
    withCompletionHandler completionHandler: @escaping () -> Void
  ) {
    let userInfo = response.notification.request.content.userInfo

    if let urlString = userInfo["url"] as? String,
       let url = URL(string: urlString),
       url.scheme == "http" || url.scheme == "https" {
      NSWorkspace.shared.open(url)
    } else {
      NotificationCenter.default.post(
        name: NSNotification.Name("GitBar-OpenPopover"),
        object: nil
      )
    }

    completionHandler()
  }
}
