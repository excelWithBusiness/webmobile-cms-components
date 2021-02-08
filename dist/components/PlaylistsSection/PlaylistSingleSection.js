import React from 'react';
import { Cell, Row, ScrollAssetCarousel } from '@excelwithbusiness/webmobile-sc-components';
import { PlaylistHeader } from "./PlaylistHeader";
import { useHistory } from 'react-router-dom';
export var PlaylistSingleSection = function PlaylistSingleSection(_ref) {
  var loading = _ref.loading,
      staticAssets = _ref.staticAssets,
      playlistsLoading = _ref.playlistsLoading,
      playlistId = _ref.playlistId,
      playlistName = _ref.playlistName,
      title = _ref.title,
      tooltip = _ref.tooltip,
      keyProp = _ref.keyProp,
      desktop = _ref.desktop,
      _onSlideChange = _ref.onSlideChange,
      bookmarkMutation = _ref.bookmarkMutation;
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
        playlistName: playlistName
      });
    },
    onBookmarkClick: function onBookmarkClick(_ref2) {
      var asset = _ref2.asset;
      return bookmarkMutation === null || bookmarkMutation === void 0 ? void 0 : bookmarkMutation(asset.id, !asset.interaction.bookmarked, playlistId);
    },
    onAssetClick: function onAssetClick(_ref3) {
      var asset = _ref3.asset;
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
