import ExpoModulesCore

public class PopoverModule: Module {

  static weak var shared: PopoverModule?

  public func definition() -> ModuleDefinition {

    Name("PopoverModule")

    Events("onPopoverState")

    OnCreate {
      Self.shared = self
    }

    AsyncFunction("open") {
      NotificationCenter.default.post(name: NSNotification.Name(rawValue: "GitBar-OpenPopover"), object: nil)
    }.runOnQueue(.main)

    AsyncFunction("close") {
      NotificationCenter.default.post(name: NSNotification.Name(rawValue: "GitBar-ClosePopover"), object: nil)
    }.runOnQueue(.main)

    AsyncFunction("setStatusItemText") { (text: String) in
      var info = [String: String]()
      info["text"] = text
      NotificationCenter.default.post(name: NSNotification.Name(rawValue: "GitBar-SetStatusItemText"), object: nil, userInfo: info)
    }.runOnQueue(.main)

    // Menu-bar urgency dot (D15). Pass a hex like "#F05069", or nil/"" to clear.
    AsyncFunction("setStatusItemTint") { (hex: String?) in
      var info = [String: String]()
      info["hex"] = hex ?? ""
      NotificationCenter.default.post(name: NSNotification.Name(rawValue: "GitBar-SetStatusItemTint"), object: nil, userInfo: info)
    }.runOnQueue(.main)
  }

  func emitPopoverState(_ state: String) {
    sendEvent("onPopoverState", ["state": state])
  }
}
