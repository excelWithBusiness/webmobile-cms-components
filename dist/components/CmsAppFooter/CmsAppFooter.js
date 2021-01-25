import React from 'react';
import { AppFooter } from '@excelwithbusiness/webmobile-sc-components';
export var CmsAppFooter = function CmsAppFooter(_ref) {
  var id = _ref.id,
      links = _ref.links,
      logoUrl = _ref.logoUrl,
      description = _ref.description;
  return React.createElement(AppFooter, {
    text: description,
    links: links,
    logoUrl: logoUrl,
    padding: true
  });
};
//# sourceMappingURL=CmsAppFooter.js.map