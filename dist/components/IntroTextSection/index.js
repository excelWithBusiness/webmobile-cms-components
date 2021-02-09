import React from 'react';
import { CopyText, Grid, Row, Cell, Offset } from 'webmobile-sc-components';
import { StyledIntroText } from "./IntroText.styled";
import { CustomSection } from "../CustomSection";
export * from "./IntroTextSection.types";
export var IntroTextSection = function IntroTextSection(_ref) {
  var introText = _ref.introText;
  if (introText === null) return null;
  return React.createElement(CustomSection, null, React.createElement(StyledIntroText, null, React.createElement(Grid, null, React.createElement(Row, {
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
  }, React.createElement(CopyText, {
    fontSize: "lg",
    tag: "p"
  }, introText))))));
};
//# sourceMappingURL=index.js.map