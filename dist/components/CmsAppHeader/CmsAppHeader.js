import React from 'react';
import { AppHeaderComponent as Header } from '@excelwithbusiness/webmobile-sc-components';
export var CmsAppHeader = function CmsAppHeader(_ref) {
  var headerContent = _ref.headerContent,
      socialSharing = _ref.socialSharing,
      logoUrl = _ref.logoUrl,
      button = _ref.button,
      _onLogoClick = _ref.onLogoClick;
  return React.createElement(Header, {
    headerContent: headerContent,
    renderSocialSharing: socialSharing,
    logoUrl: logoUrl,
    button: button,
    onLogoClick: function onLogoClick() {
      return _onLogoClick === null || _onLogoClick === void 0 ? void 0 : _onLogoClick();
    },
    onButtonClick: function onButtonClick() {
      return null;
    },
    onLanguageChoice: function onLanguageChoice() {
      return null;
    },
    setFilter: function setFilter() {
      return null;
    },
    clearFilter: function clearFilter() {
      return null;
    }
  });
};
//# sourceMappingURL=CmsAppHeader.js.map