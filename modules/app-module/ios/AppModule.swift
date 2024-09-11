import ExpoModulesCore

public class AppModule: Module {

  public func definition() -> ModuleDefinition {

    Name("AppModule")

    Function("closeApp") {
      exit(0)
    }
  }
}
