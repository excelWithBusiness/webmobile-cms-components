import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { LinkSection } from "./index";
import { mountWithThemeAndRouter } from 'webmobile-sc-components';
var mockAnchorId = 'linkAnchorId';
describe('Content:Common:Components:LinkSection', function () {
  afterEach(cleanup);
  it('renders section with link and label', function () {
    var label = 'alice';
    var aliceLink = {
      url: '/alice',
      __typename: 'Link'
    };
    var linkSection = mountWithThemeAndRouter(React.createElement(LinkSection, {
      link: aliceLink,
      label: label,
      anchorId: mockAnchorId
    }));
    var link = linkSection.find('a').last();
    expect(link.prop('href')).toEqual(aliceLink.url);
    expect(link.text()).toBe(label);
  });
  it('renders section without', function () {
    var label = 'alice';
    var linkSection = mountWithThemeAndRouter(React.createElement(LinkSection, {
      link: undefined,
      label: label,
      anchorId: mockAnchorId
    }));
    var link = linkSection.find('a').last();
    expect(link.prop('href')).toEqual('');
    expect(link.text()).toBe(label);
  });
});
//# sourceMappingURL=LinkSection.test.js.map