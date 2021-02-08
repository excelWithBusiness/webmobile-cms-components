import React from 'react';
import { Cell, Grid, Offset, Row, Section, Spacer, Accordion } from '@excelwithbusiness/webmobile-sc-components';
import { isArray, length } from "../../../../utils/FP/FP";
import { prepareEntries } from "./helpers";
export var Content = function Content(_ref) {
  var slices = _ref.slices;

  if (!isArray(slices) || !length(slices, 0)) {
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