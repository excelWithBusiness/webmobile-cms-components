function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { HomePage as HomePageWithoutQuery } from "./HomePage";
export var HomePageWrapper = function HomePageWrapper(props) {
  return React.createElement(HomePageWithoutQuery, _extends({}, props, {
    landingPageContent: props.landingPageContent
  }));
};
export * from "./HomePage.types";
//# sourceMappingURL=index.js.map