import {filteredTheme} from '@excelwithbusiness/webmobile-sc-components';
import {ExtendedThemeType} from './types';

export const lightFilteredTheme: ExtendedThemeType = {
  color: {
    ...filteredTheme.color,
    transparent: 'transparent',
    contrastColor: filteredTheme.color.black,
  },
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'black',
    },
    content: {
      textColor: 'black',
      backgroundColor: 'white',
      borderColor: 'grey2',
    },
    endOfPage: {
      textColor: 'black',
      backgroundColor: 'grey1',
    },
  },
};

export const greyFilteredTheme: ExtendedThemeType = {
  color: {
    ...filteredTheme.color,
    transparent: 'transparent',
    textColor: filteredTheme.color.white,
    backgroundColor: filteredTheme.color.grey5,
    surfaceColor: filteredTheme.color.grey5,
    contrastColor: '#454647',
  },
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'white',
    },
    content: {
      textColor: 'white',
      backgroundColor: 'grey5',
      borderColor: filteredTheme.color.grey5,
    },
    endOfPage: {
      textColor: 'black',
      backgroundColor: 'grey1',
    },
  },
};

export const darkFilteredTheme: ExtendedThemeType = {
  color: {
    ...filteredTheme.color,
    transparent: 'transparent',
    textColor: filteredTheme.color.white,
    backgroundColor: filteredTheme.color.black,
    surfaceColor: filteredTheme.color.black,
    contrastColor: '#454647',
  },
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'white',
    },
    content: {
      textColor: 'white',
      backgroundColor: 'black',
      borderColor: filteredTheme.color.black,
    },
    endOfPage: {
      textColor: 'black',
      backgroundColor: 'grey1',
    },
  },
};
