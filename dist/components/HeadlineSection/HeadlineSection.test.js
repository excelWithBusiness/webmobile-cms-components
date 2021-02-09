import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { HeadlineSection } from "./index";
import { mountWithTheme } from 'webmobile-sc-components';
import { Elements } from 'prismic-reactjs';
var mockAnchorId = 'headlineAnchorId';
describe('Content:Common:Components:HeadlineSection', function () {
  afterEach(cleanup);
  it('renders section with heading', function () {
    var aliceHeading = {
      spans: [],
      type: Elements.heading1,
      text: 'Alice and bob'
    };
    var headlineSection = mountWithTheme(React.createElement(HeadlineSection, {
      headline: [aliceHeading],
      anchorId: mockAnchorId
    }));
    var heading = headlineSection.find('h1').last();
    expect(heading.text()).toBe(aliceHeading.text);
  });
});
//# sourceMappingURL=HeadlineSection.test.js.map