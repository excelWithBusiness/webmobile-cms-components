function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { WhoWeArePage as TopicsPageWithoutQuery } from "./WhoWeArePage";
export var TopicsPageWrapper = function TopicsPageWrapper(props) {
  return React.createElement(TopicsPageWithoutQuery, _extends({}, props, {
    landingPageContent: props.landingPageContent
  }));
};
export * from "./WhoWeArePage.types";
//# sourceMappingURL=index.js.map