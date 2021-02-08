function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React from 'react';
import { Section } from '@excelwithbusiness/webmobile-sc-components';
import { CmsCallToActionPanel } from "../../../components/CallToActionPanel";
import { StaticPlaylist } from "../../../components/StaticPlaylist";
export var Content = function Content(_ref) {
  var slices = _ref.slices;

  if (!Array.isArray(slices) || !slices.length) {
    return null;
  }

  return React.createElement(Section, null, slices === null || slices === void 0 ? void 0 : slices.map(function (slice, index) {
    var keyProp = "".concat(slice === null || slice === void 0 ? void 0 : slice.type, "_").concat(index);

    switch (slice === null || slice === void 0 ? void 0 : slice.type) {
      case 'CallToAction':
        console.log('matched CallToAction');
        return React.createElement(CmsCallToActionPanel, {
          content: slice.pageComponents
        });

      case 'PlaylistSection':
        console.log('matched PlaylistSection');
        return React.createElement(StaticPlaylist, {
          key: keyProp,
          playlistName: slice.name,
          title: slice.pageComponents.sectionName,
          playlistId: slice.id,
          toolTip: "Not found where this us yet!!",
          desktop: slice.size,
          staticAssets: _toConsumableArray(slice.pageComponents.staticPlaylists[0].staticAssetTiles)
        });

      default:
        return null;
    }
  }));
};
//# sourceMappingURL=index.js.map