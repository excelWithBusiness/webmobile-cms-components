import React from 'react';
import { Button, CopyText, Heading, ImageAndText, styled } from '@excelwithbusiness/webmobile-sc-components';
var orientation = {
  right: 'right',
  left: 'left'
};
var StyledChildContainer = styled.div.withConfig({
  displayName: "CallToActionPanel__StyledChildContainer",
  componentId: "hnmvdm-0"
})(["display:flex;flex:0 1 auto;padding:$(({theme}) => theme.spacing.base.sm)"]);
export var CmsCallToActionPanel = function CmsCallToActionPanel(_ref) {
  var content = _ref.content,
      _ref$svg = _ref.svg,
      svg = _ref$svg === void 0 ? null : _ref$svg,
      _ref$withLQIP = _ref.withLQIP,
      withLQIP = _ref$withLQIP === void 0 ? false : _ref$withLQIP;
  var alignment = content !== null && content !== void 0 && content.rightOrientation ? orientation.right : orientation.left;
  return React.createElement(ImageAndText, {
    aligmnent: alignment,
    image: content === null || content === void 0 ? void 0 : content.image.url,
    svg: svg,
    withLQIP: withLQIP
  }, React.createElement(StyledChildContainer, null, React.createElement(Heading, {
    scale: "level-1",
    tag: "h1",
    weight: "regular",
    margin: "0",
    alignText: "center"
  }, content === null || content === void 0 ? void 0 : content.heading), React.createElement(CopyText, {
    tag: "p",
    padding: "md 0",
    margin: "0 md",
    color: "grey5",
    display: "flex"
  }, content === null || content === void 0 ? void 0 : content.description), React.createElement(Button, {
    actionType: "primary",
    size: "md",
    weight: "bold",
    href: content === null || content === void 0 ? void 0 : content.button.link
  }, content === null || content === void 0 ? void 0 : content.button.text)));
};
//# sourceMappingURL=CallToActionPanel.js.map