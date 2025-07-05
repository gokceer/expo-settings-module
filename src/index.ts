// Reexport the native module. On web, it will be resolved to ExpoSettingsModule.web.ts

import ExpoSettingsModule from "./ExpoSettingsModule";

// and on native platforms to ExpoSettingsModule.ts
export { default } from "./ExpoSettingsModule";

const emitter = ExpoSettingsModule;

export type ThemeChangeEvent = {
  theme: string;
};

export function addThemeListener(listener: (event: ThemeChangeEvent) => void) {
  return emitter.addListener("onChangeTheme", listener);
}

export function getTheme(): string {
  return ExpoSettingsModule.getTheme();
}

export function setTheme(theme: string): void {
  return ExpoSettingsModule.setTheme(theme);
}
