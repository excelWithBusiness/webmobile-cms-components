import { lightFilteredTheme, lightDanoneTheme, greyFilteredTheme, greyDanoneTheme, darkFilteredTheme, darkDanoneTheme } from "./";
export var getExtendedThemes = function getExtendedThemes(pageTheme) {
  switch (pageTheme) {
    case 'dark':
      return {
        extendedMMTheme: darkFilteredTheme,
        extendedSETheme: darkDanoneTheme
      };

    case 'grey':
      return {
        extendedMMTheme: greyFilteredTheme,
        extendedSETheme: greyDanoneTheme
      };

    default:
      return {
        extendedMMTheme: lightFilteredTheme,
        extendedSETheme: lightDanoneTheme
      };
  }
};
//# sourceMappingURL=themes.helper.js.map