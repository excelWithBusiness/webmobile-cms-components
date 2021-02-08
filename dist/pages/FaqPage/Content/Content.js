function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Cell, Grid, Offset, Row, Section, Spacer, Accordion } from '@excelwithbusiness/webmobile-sc-components';
export var prepareEntries = function prepareEntries(_ref) {
  var pageComponents = _ref.pageComponents;
  return pageComponents.entries.map(function (_ref2) {
    var title = _ref2.title,
        description = _ref2.description;
    return {
      title: title,
      details: description
    };
  }).map(function (e, i) {
    return i === 0 ? _objectSpread(_objectSpread({}, e), {}, {
      isOpenInitially: true,
      noBorderTop: true
    }) : e;
  });
};
export var Content = function Content(_ref3) {
  var slices = _ref3.slices;

  if (!Array.isArray(slices) || !slices.length) {
    return null;
  }

  return React.createElement(Section, null, slices === null || slices === void 0 ? void 0 : slices.map(function (slice, index) {
    var keyProp = "".concat(slice === null || slice === void 0 ? void 0 : slice.type, "_").concat(index);

    switch (slice === null || slice === void 0 ? void 0 : slice.type) {
      case 'Accordion':
        return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Offset, {
          colsXs: 0,
          columns: 1
        }), React.createElement(Cell, {
          columns: 10
        }, React.createElement(Spacer, {
          size: "md"
        }), React.createElement(Accordion, {
          key: keyProp,
          entries: prepareEntries(slice),
          isLarge: true,
          withIconsOnRight: true
        }))));

      default:
        return null;
    }
  }));
};
//# sourceMappingURL=Content.js.map