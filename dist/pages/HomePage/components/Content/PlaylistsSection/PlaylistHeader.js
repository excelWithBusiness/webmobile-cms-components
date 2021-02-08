import React from 'react';
import { Heading, CopyText, Icon, ToolTip, styled, css, IconInfoOutlined } from "@excelwithbusiness/webmobile-sc-components";
export var StyledToolTip = styled(ToolTip).withConfig({
  displayName: "PlaylistHeader__StyledToolTip",
  componentId: "j24l6k-0"
})(function () {
  return css(["z-index:10;"]);
});
export var PlaylistHeader = function PlaylistHeader(_ref) {
  var title = _ref.title,
      toolTip = _ref.toolTip,
      name = _ref.name;
  return React.createElement(React.Fragment, null, React.createElement(CopyText, {
    limitLines: 1,
    fontSize: "sm",
    as: "div",
    display: "inline-flex",
    margin: "0 sm xs 0"
  }, title), React.createElement(StyledToolTip, {
    content: toolTip
  }, React.createElement(Icon, {
    width: "8px",
    height: "8px"
  }, React.createElement(IconInfoOutlined, null))), React.createElement(Heading, {
    color: "primary",
    scale: "level-2",
    tag: "h2",
    lineHeight: "sm",
    fontFamily: "default",
    weight: "semibold"
  }, name));
};
//# sourceMappingURL=PlaylistHeader.js.map