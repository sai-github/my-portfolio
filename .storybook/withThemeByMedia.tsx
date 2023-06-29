import { useEffect } from "@storybook/preview-api";
import type { DecoratorFunction, Renderer } from "@storybook/types";
import { registerThemeState, listenThemeSwitch } from "./helpers";
import { addons } from "@storybook/preview-api";

export interface MediaStrategyConfiguration {
  themes: Record<string, string>;
  defaultTheme: string;
}

// export const withThemeByMedia = <TRenderer extends Renderer = Renderer>({
//   themes,
//   defaultTheme,
// }: MediaStrategyConfiguration): DecoratorFunction<TRenderer> => {
//   registerThemeState(Object.keys(themes), defaultTheme);

// return (storyFn, context) => {
//   useEffect(() => {
//     console.log("useEffect", themes);
//     const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
//     const applyTheme = (e: MediaQueryListEvent) => {
//       const theme = e.matches ? themes.dark : themes.light;
//       console.log("applyTheme", theme);
//       document.documentElement.setAttribute("data-theme", theme);
//     };

//     // Listen to theme switch
//     listenThemeSwitch((theme: string) => {
//       console.log("listenThemeSwitch", theme);

//       // Here, you can use the theme value to perform your document logic
//       document.documentElement.setAttribute("data-theme", theme);
//     }, themes);

//     // Also, if needed listen on color-scheme
//     mediaQueryList.addEventListener("change", applyTheme);

//     // Set the initial theme
//     document.documentElement.setAttribute(
//       "data-theme",
//       mediaQueryList.matches ? themes.dark : themes.light
//     );

//     return () => {
//       // Clean up
//       mediaQueryList.removeEventListener("change", applyTheme);
//     };
//   }, []);

//   return storyFn();
// };
// };

export const withThemeByMedia =
  ({ themes, defaultTheme }) =>
  (storyFn, context) => {
    useEffect(() => {
      console.log("useEffect", themes);

      const channel = addons.getChannel();

      const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
      const applyTheme = (e) => {
        const theme = e.matches ? themes.dark : themes.light;
        console.log("applyTheme", theme);
        document.documentElement.setAttribute("data-theme", theme);
      };

      // Listener for changes in toolbar items
      const updateGlobalArgsListener = ({ globalArgs }) => {
        console.log("globalArgs", globalArgs);

        const theme = globalArgs.themeSwitcher;

        if (theme) {
          console.log("Theme has changed to:", theme);

          // Apply the theme change logic here
          document.documentElement.setAttribute("data-theme", theme);
        }
      };

      // Add the listener
      channel.on("UPDATE_GLOBAL_ARGS", updateGlobalArgsListener);

      // Also, if needed listen on color-scheme
      mediaQueryList.addEventListener("change", applyTheme);

      // Set the initial theme
      document.documentElement.setAttribute(
        "data-theme",
        mediaQueryList.matches ? themes.dark : themes.light
      );

      return () => {
        // Clean up
        mediaQueryList.removeEventListener("change", applyTheme);
        channel.off("UPDATE_GLOBAL_ARGS", updateGlobalArgsListener);
      };
    }, []);

    return storyFn();
  };
