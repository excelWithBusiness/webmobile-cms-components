import React from 'react';
import { Cell, Grid, Row, Spacer } from '@excelwithbusiness/webmobile-sc-components';
import { Main } from "./components/Main/Main";
import { Content } from "./components/Content";
export var HomePage = function HomePage(_ref) {
  var landingPageContent = _ref.landingPageContent;
  var slices = landingPageContent.slices;
  return React.createElement(React.Fragment, null, React.createElement(Main, {
    slices: slices !== null && slices !== void 0 ? slices : []
  }), React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(Spacer, {
    size: "md"
  }), React.createElement(Content, {
    slices: slices !== null && slices !== void 0 ? slices : []
  }), React.createElement(Spacer, {
    size: "md"
  })))));
};
//# sourceMappingURL=HomePage.js.map