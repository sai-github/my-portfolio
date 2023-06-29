import { addons } from "@storybook/preview-api";
import { THEMING_EVENTS } from "./constants";

export function registerThemeState(themeNames: string[], defaultTheme: string) {
  addons.getChannel().emit(THEMING_EVENTS.REGISTER_THEMES, {
    defaultTheme,
    themes: themeNames,
  });
}

export function switchThemeState(theme: string) {
  addons.getChannel().emit(THEMING_EVENTS.SWITCH_THEMES, theme);
}

export function listenThemeSwitch(
  callback: (theme: string) => void,
  themeNames: Record<string, string>
) {
  addons.getChannel().on(THEMING_EVENTS.SWITCH_THEMES, (theme) => {
    callback(themeNames[theme]);
  });
}
