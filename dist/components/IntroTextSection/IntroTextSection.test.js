import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { IntroTextSection } from "./";
import { mountWithTheme, CopyText } from 'webmobile-sc-components';
describe('Content:Common:Components:IntroTextSection', function () {
  afterEach(cleanup);
  it('renders section with copytext', function () {
    var myTestContent = 'If you like Pina Coladas, and getting caught in the rain';
    var introTextSection = mountWithTheme(React.createElement(IntroTextSection, {
      introText: myTestContent
    }));
    var introText = introTextSection.find(CopyText).first();
    expect(introText.text()).toBe(myTestContent);
  });
});
//# sourceMappingURL=IntroTextSection.test.js.map