import React from 'react';
import { Cell, CopyText, Heading, Icon, IconInfoOutlined, Row, ScrollAssetCarousel, styled, ToolTip } from "@excelwithbusiness/webmobile-sc-components";
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
      staticAssets = _ref2.staticAssets,
      playlistsLoading = _ref2.playlistsLoading,
      playlistId = _ref2.playlistId,
      playlistName = _ref2.playlistName,
      title = _ref2.title,
      tooltip = _ref2.tooltip,
      keyProp = _ref2.keyProp,
      desktop = _ref2.desktop,
      _onSlideChange = _ref2.onSlideChange,
      bookmarkMutation = _ref2.bookmarkMutation;
  var history = useHistory();
  return React.createElement(Row, {
    id: playlistId,
    key: keyProp,
    "data-name": playlistName
  }, React.createElement(Cell, {
    columns: 12
  }, React.createElement(ScrollAssetCarousel, {
    title: React.createElement(PlaylistHeader, {
      title: title,
      toolTip: tooltip,
      name: playlistName
    }),
    loading: loading,
    fixedArrowPositions: true,
    assets: staticAssets,
    onSlideChange: function onSlideChange() {
      return _onSlideChange === null || _onSlideChange === void 0 ? void 0 : _onSlideChange({
        playlistId: playlistId,
        playlistName: playlistName,
        playlistIndex: index
      });
    },
    onBookmarkClick: function onBookmarkClick(_ref3) {
      var asset = _ref3.asset;
      return bookmarkMutation === null || bookmarkMutation === void 0 ? void 0 : bookmarkMutation(asset.id, !asset.interaction.bookmarked, playlistId);
    },
    onAssetClick: function onAssetClick(_ref4) {
      var asset = _ref4.asset;
      return history.push({
        pathname: "/learning-asset/".concat(asset.niceName, "?pid_hint=").concat(playlistId)
      });
    },
    context: playlistName,
    lazyLoad: true,
    showArrows: true,
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