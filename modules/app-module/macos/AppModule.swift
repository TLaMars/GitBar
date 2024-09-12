import ExpoModulesCore
import ServiceManagement

// custom error
enum AppError: Error {
  case failedToSetLaunchAtLogin
}

public class AppModule: Module {

  public func definition() -> ModuleDefinition {

    Name("AppModule")

    Function("closeApp") {
      exit(0)
    }

    AsyncFunction("enableLaunchAtLogin") { (enabled: Bool) in
      // TODO: Implement SMAppService for macOS13+
      guard SMLoginItemSetEnabled("com.lamars.gitbar.AutoLauncher" as CFString, enabled) else {
          throw AppError.failedToSetLaunchAtLogin
      }
    }
  }
}
