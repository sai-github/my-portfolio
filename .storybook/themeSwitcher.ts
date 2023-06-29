import { switchThemeState } from "./helpers";

export const themeSwitcherToolbar = {
  // title: "Switch theme",
  items: [
    {
      value: "light",
      title: "Light",
      icon: "sun",
    },
    { value: "dark", title: "Dark", icon: "moon" },
  ],
  showName: true,
};

export const themeSwitcherGlobalTypes = {
  themeSwitcher: {
    description: "Preferred color scheme",
    defaultValue: "light",
    toolbar: themeSwitcherToolbar,
  },
};
