package expo.modules.settings

import android.content.Context
import android.content.SharedPreferences
import android.util.Log
import androidx.core.os.bundleOf
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class ExpoSettingsModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoSettings')` in JavaScript.
    Name("ExpoSettings")

    Events("onChangeTheme")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("setTheme") { theme: String ->
      getPreferences().edit().putString("theme", theme).apply()
      this@ExpoSettingsModule.sendEvent("onChangeTheme", bundleOf("theme" to theme))
    }


    Function("getTheme") {
      return@Function getPreferences().getString("theme", "system")
    }
  }

  private val context
    get() = requireNotNull(appContext.reactContext)

  private fun getPreferences(): SharedPreferences {
    return context.getSharedPreferences(context.packageName + ".settings", Context.MODE_PRIVATE)
  }
}
