function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { HeroBanner } from '@excelwithbusiness/webmobile-sc-components';
import { ZONES } from "../../types";
import { CmsCallToActionPanel } from "../../components/CallToActionPanel/CallToActionPanel";
import { CmsAppHeader } from "../../components/CmsAppHeader";
import { CmsAppFooter } from "../../components/CmsAppFooter";
export var ConfigurableCmsHtmlSerializer = function ConfigurableCmsHtmlSerializer() {
  var customProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (render) {
    var _serialize;

    var serialize = (_serialize = {}, _defineProperty(_serialize, ZONES.HERO_BANNER, function (node, children) {
      return React.createElement(HeroBanner, {
        alignment: node.data.alignment,
        content: node.data.heroBanner,
        color: customProps.color
      });
    }), _defineProperty(_serialize, ZONES.CALL_TO_ACTION_PANEL, function (node, children) {
      return React.createElement(CmsCallToActionPanel, {
        alignment: node.data.leftAlignment,
        content: node.data.callToActionPanel,
        withLQIP: false
      });
    }), _defineProperty(_serialize, ZONES.HEADER, function (node, children) {
      return React.createElement(CmsAppHeader, {
        headerContent: node.data.header,
        button: node.data.button,
        socialSharing: React.createElement(React.Fragment, null),
        logoUrl: node.data.url,
        onLogoClick: function onLogoClick() {
          return null;
        }
      });
    }), _defineProperty(_serialize, ZONES.FOOTER, function (node, children) {
      return React.createElement(CmsAppFooter, {
        links: node.data.links,
        description: node.data.description,
        logoUrl: node.data.url
      });
    }), _defineProperty(_serialize, ZONES.GENERIC_SECTION, function (node, children) {
      return null;
    }), _defineProperty(_serialize, ZONES.STATIC_PLAYLIST, function (node, children) {
      return null;
    }), _defineProperty(_serialize, ZONES.STATIC_PAGE_CONNECTION, function (node, children) {
      return null;
    }), _defineProperty(_serialize, ZONES.MULTI_COLUMN_SECTION, function (node, children) {
      return null;
    }), _serialize);
    return serialize;
  };
};
//# sourceMappingURL=ConfigurableCmsHtmlSerializer.js.map