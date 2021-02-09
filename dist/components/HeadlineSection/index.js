import * as React from 'react';
import { Grid, Cell, Row, Offset } from 'webmobile-sc-components';
import { CustomSection } from "../CustomSection";
import { ConfigurablePrismicHtmlSerializer, Serializer } from "../Serializer";
export * from "./HeadlineSection.types";
export var HeadlineSection = function HeadlineSection(_ref) {
  var headline = _ref.headline,
      anchorId = _ref.anchorId,
      textColor = _ref.textColor,
      sectionColor = _ref.sectionColor;
  return React.createElement(CustomSection, {
    id: anchorId,
    color: sectionColor
  }, React.createElement(Grid, null, React.createElement(Row, {
    noMargin: true
  }, React.createElement(Offset, {
    colsXl: 1,
    colsLg: 1,
    colsMd: 1,
    colsSm: 1,
    colsXs: 0
  }), React.createElement(Cell, {
    colsXl: 10,
    colsLg: 10,
    colsMd: 6,
    colsSm: 6,
    colsXs: 4
  }, Serializer(headline, ConfigurablePrismicHtmlSerializer({
    textColor: textColor
  }))))));
};
//# sourceMappingURL=index.js.map