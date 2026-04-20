import ExpoModulesCore

public class PopoverModule: Module {
    

  public func definition() -> ModuleDefinition {

    Name("PopoverModule")

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
  }
}
