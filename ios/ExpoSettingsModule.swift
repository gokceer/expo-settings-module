import ExpoModulesCore

public class ExpoSettingsModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoSettings')` in JavaScript.
    Name("ExpoSettings")
      
      Events("onChangeTheme")

      // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
      Function("setTheme") { (theme: String) -> Void in
          UserDefaults.standard.set(theme, forKey: "theme")
          sendEvent("onChangeTheme", [ "theme": theme])
      }
      
      Function("getTheme") { () -> String in
          UserDefaults.standard.string(forKey: "theme") ?? "system"
      }
      
  }
}
