import ExpoModulesCore
import UserNotifications

struct NotificationPayload: Record {
  @Field var id: String = ""
  @Field var title: String = ""
  @Field var body: String = ""
  @Field var url: String? = nil
  @Field var threadId: String? = nil
}

public class NotificationsModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {

    Name("NotificationsModule")

    AsyncFunction("requestPermissions") { (promise: Promise) in
      let center = UNUserNotificationCenter.current()
      let options: UNAuthorizationOptions = [.alert, .sound, .badge]
      center.requestAuthorization(options: options) { granted, error in
        if let error = error {
            promise.reject(error)
          return
        }

          promise.resolve(granted)
        if !granted {
          NSLog("Notification permission denied")
        }
      }
    }

    AsyncFunction("getPermissions") { (promise: Promise) in
      let center = UNUserNotificationCenter.current()
      center.getNotificationSettings { settings in
        promise.resolve(settings.authorizationStatus.rawValue)
      }
    }

    // A dumb pipe: JS decides what and when, this only shapes the banner.
    Function("sendNotification") { (payload: NotificationPayload) in
      let content = UNMutableNotificationContent()
      content.title = payload.title
      content.body = payload.body
      content.sound = .default

      // The subscriber's didReceive opens this on tap; without it, tapping
      // falls back to opening the popover.
      if let url = payload.url {
        content.userInfo = ["url": url]
      }

      if let threadId = payload.threadId {
        content.threadIdentifier = threadId
      }

      if #available(macOS 12.0, *) {
        content.interruptionLevel = .active
      }

      // Reusing the per-PR id makes a newer banner replace the older one
      // OS-side, so stale states for a PR never stack in Notification Center.
      let request = UNNotificationRequest(identifier: payload.id, content: content, trigger: nil)
      UNUserNotificationCenter.current().add(request) { error in
        if let error = error {
          NSLog("Error sending notification: \(error.localizedDescription)")
        }
      }
    }
  }
}
