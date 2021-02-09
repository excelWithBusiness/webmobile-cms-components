import {
  lightFilteredTheme,
  lightDanoneTheme,
  greyFilteredTheme,
  greyDanoneTheme,
  darkFilteredTheme,
  darkDanoneTheme,
} from './'
import { GetExtendedThemesType } from '../types/SpecialPage.types'

export const getExtendedThemes = (pageTheme: string | null): GetExtendedThemesType => {
  switch (pageTheme) {
    case 'dark':
      return {
        extendedMMTheme: darkFilteredTheme,
        extendedSETheme: darkDanoneTheme,
      }
    case 'grey':
      return {
        extendedMMTheme: greyFilteredTheme,
        extendedSETheme: greyDanoneTheme,
      }
    default:
      return {
        extendedMMTheme: lightFilteredTheme,
        extendedSETheme: lightDanoneTheme,
      }
  }
}
