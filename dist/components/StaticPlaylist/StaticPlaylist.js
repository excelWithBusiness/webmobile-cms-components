import React from 'react';
import { Cell, CopyText, Heading, Icon, IconInfoOutlined, Row, ScrollAssetCarousel, styled, ToolTip } from 'webmobile-sc-components';
import { useHistory } from 'react-router-dom';
export var StyledToolTip = styled(ToolTip).withConfig({
  displayName: "StaticPlaylist__StyledToolTip",
  componentId: "sc-1w50l6a-0"
})(["z-index:10;"]);
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
export var StaticPlaylist = function StaticPlaylist(_ref2) {
  var loading = _ref2.loading,
      assets = _ref2.assets,
      type = _ref2.type,
      id = _ref2.id,
      name = _ref2.name,
      title = _ref2.title,
      tooltip = _ref2.tooltip,
      desktop = _ref2.desktop,
      _onSlideChange = _ref2.onSlideChange,
      onBookmarkClick = _ref2.onBookmarkClick;
  var history = useHistory();
  return React.createElement(Row, {
    id: id,
    "data-name": name
  }, React.createElement(Cell, {
    columns: 12
  }, React.createElement(ScrollAssetCarousel, {
    headline: title,
    "data-test": "landing-page-playlist",
    title: React.createElement(PlaylistHeader, {
      title: title,
      toolTip: tooltip,
      name: name
    }),
    loading: !assets,
    assets: assets,
    showBookmark: false,
    showLock: true,
    onSlideChange: function onSlideChange() {
      return _onSlideChange === null || _onSlideChange === void 0 ? void 0 : _onSlideChange({
        id: id,
        name: name
      });
    },
    onlockClick: function onlockClick(_ref3) {
      var _onLockClick;

      var asset = _ref3.asset;
      return (_onLockClick = onLockClick) === null || _onLockClick === void 0 ? void 0 : _onLockClick(asset.id, !asset.interaction.bookmarked, id);
    },
    onAssetClick: function onAssetClick(_ref4) {
      var asset = _ref4.asset;
      return history.push({
        pathname: "/learning-asset/".concat(asset.niceName, "?pid_hint=").concat(id)
      });
    },
    context: name,
    lazyLoad: true,
    showArrows: true,
    withLQIP: true,
    tileMargin: "md",
    slidesPerPageSettings: {
      desktop: desktop,
      mobileBig: 1,
      mobileSmall: 1,
      tablet: 3
    }
  })));
};
//# sourceMappingURL=StaticPlaylist.js.map