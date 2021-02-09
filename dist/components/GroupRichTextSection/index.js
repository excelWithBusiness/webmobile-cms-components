import * as React from 'react';
import { Card, Grid, Cell, Row, Offset } from 'webmobile-sc-components';
import { StyledCardRichText, StyledCardHeadline, StyledGroupRichText } from "./GroupRichTextSection.styled";
import { HeadlineSection } from "../HeadlineSection";
import { CustomSection } from "../CustomSection";
import { ConfigurablePrismicHtmlSerializer, Serializer } from "../Serializer";
export * from "./GroupRichTextSection.types";

var renderTextRows = function renderTextRows(fields) {
  return fields.map(function (field, index) {
    return field.textField && React.createElement(CustomSection, {
      key: index
    }, React.createElement(Grid, null, Serializer(field.textField, ConfigurablePrismicHtmlSerializer({}))));
  });
};

export var GroupRichTextSection = function GroupRichTextSection(_ref) {
  var _fields$;

  var fields = _ref.fields,
      sectionColor = _ref.sectionColor,
      anchorId = _ref.anchorId;
  return React.createElement(StyledGroupRichText, {
    id: anchorId !== null && anchorId !== void 0 ? anchorId : undefined
  }, React.createElement(CustomSection, {
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
  }, React.createElement(Card, {
    elevation: 0,
    elevationHover: 0,
    padding: "md",
    shape: "rounded-big",
    surface: "white"
  }, React.createElement(StyledCardHeadline, null, React.createElement(HeadlineSection, {
    headline: (_fields$ = fields[0]) === null || _fields$ === void 0 ? void 0 : _fields$.title
  })), React.createElement(StyledCardRichText, null, renderTextRows(fields))))))));
};
//# sourceMappingURL=index.js.map