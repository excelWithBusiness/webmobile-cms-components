import {
  lightFilteredTheme,
  lightDanoneTheme,
  greyFilteredTheme,
  greyDanoneTheme,
  darkFilteredTheme,
  darkDanoneTheme,
} from './'

type GetExtendedThemesType = {}

export const getExtendedThemes = (pageTheme: string | null): GetExtendedThemesType => {
  switch (pageTheme) {
    case 'dark':
      return {
        extendedFLTRTheme: darkFilteredTheme,
        extendedDNTheme: darkDanoneTheme,
      }
    case 'grey':
      return {
        extendedFLTRTheme: greyFilteredTheme,
        extendedDNTheme: greyDanoneTheme,
      }
    default:
      return {
        extendedFLTRTheme: lightFilteredTheme,
        extendedDNTheme: lightDanoneTheme,
      }
  }
}
