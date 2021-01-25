import React from 'react';
import { AppHeaderComponent as Header } from '@excelwithbusiness/webmobile-sc-components';
export var CmsAppHeader = function CmsAppHeader(_ref) {
  var id = _ref.id,
      headerContent = _ref.headerContent,
      socialSharing = _ref.socialSharing,
      logoUrl = _ref.logoUrl,
      onLogoClick = _ref.onLogoClick;
  return React.createElement(Header, {
    headerContent: headerContent,
    socialSharing: socialSharing,
    logoUrl: logoUrl,
    onLogoClick: onLogoClick,
    navigationMenu: null,
    languages: null
  });
};
//# sourceMappingURL=CmsAppHeader.js.map