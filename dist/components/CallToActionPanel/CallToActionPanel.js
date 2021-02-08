import React from 'react';
import { Button, CallToActionPanel, CopyText, Heading, Spacer, styled } from '@excelwithbusiness/webmobile-sc-components';
var orientation = {
  right: 'right',
  left: 'left'
};
var StyledChildContainer = styled.div.withConfig({
  displayName: "CallToActionPanel__StyledChildContainer",
  componentId: "sc-14qqzrs-0"
})(["display:flex;flex-direction:column;padding:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.xs;
});
export var CmsCallToActionPanel = function CmsCallToActionPanel(_ref2) {
  var _content$image;

  var content = _ref2.content,
      svg = _ref2.svg,
      _ref2$withLQIP = _ref2.withLQIP,
      withLQIP = _ref2$withLQIP === void 0 ? false : _ref2$withLQIP;
  var alignment = content !== null && content !== void 0 && content.rightOrientation ? orientation.right : orientation.left;
  return React.createElement(React.Fragment, null, React.createElement(CallToActionPanel, {
    alignment: alignment,
    image: (_content$image = content === null || content === void 0 ? void 0 : content.image) !== null && _content$image !== void 0 ? _content$image : null,
    svg: !(content !== null && content !== void 0 && content.image) && svg,
    withLQIP: withLQIP
  }, React.createElement(StyledChildContainer, null, React.createElement(Heading, {
    scale: "level-1",
    tag: "h1",
    weight: "regular",
    margin: "0 0 xxl",
    textAlign: "left"
  }, content === null || content === void 0 ? void 0 : content.heading), React.createElement(CopyText, {
    tag: "div",
    padding: "0",
    margin: "0",
    color: "grey5",
    display: "flex",
    textAlign: "left"
  }, content === null || content === void 0 ? void 0 : content.description), (content === null || content === void 0 ? void 0 : content.button) && React.createElement(Button, {
    actionType: "primary",
    size: "md",
    weight: "bold",
    href: content === null || content === void 0 ? void 0 : content.button.link
  }, content === null || content === void 0 ? void 0 : content.button.text))), React.createElement(Spacer, {
    size: "md"
  }));
};
//# sourceMappingURL=CallToActionPanel.js.map