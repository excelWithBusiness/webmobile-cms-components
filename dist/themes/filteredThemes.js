function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { filteredTheme } from '@excelwithbusiness/webmobile-sc-components';
export var lightFilteredTheme = {
  color: _objectSpread(_objectSpread({}, filteredTheme.color), {}, {
    transparent: 'transparent',
    contrastColor: filteredTheme.color.black
  }),
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'black'
    },
    content: {
      textColor: 'black',
      backgroundColor: 'white',
      borderColor: 'grey2'
    },
    endOfPage: {
      textColor: 'black',
      backgroundColor: 'grey1'
    }
  }
};
export var greyFilteredTheme = {
  color: _objectSpread(_objectSpread({}, filteredTheme.color), {}, {
    transparent: 'transparent',
    textColor: filteredTheme.color.white,
    backgroundColor: filteredTheme.color.grey5,
    surfaceColor: filteredTheme.color.grey5,
    contrastColor: '#454647'
  }),
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'white'
    },
    content: {
      textColor: 'white',
      backgroundColor: 'grey5',
      borderColor: filteredTheme.color.grey5
    },
    endOfPage: {
      textColor: 'black',
      backgroundColor: 'grey1'
    }
  }
};
export var darkFilteredTheme = {
  color: _objectSpread(_objectSpread({}, filteredTheme.color), {}, {
    transparent: 'transparent',
    textColor: filteredTheme.color.white,
    backgroundColor: filteredTheme.color.black,
    surfaceColor: filteredTheme.color.black,
    contrastColor: '#454647'
  }),
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'white'
    },
    content: {
      textColor: 'white',
      backgroundColor: 'black',
      borderColor: filteredTheme.color.black
    },
    endOfPage: {
      textColor: 'black',
      backgroundColor: 'grey1'
    }
  }
};
//# sourceMappingURL=filteredThemes.js.map