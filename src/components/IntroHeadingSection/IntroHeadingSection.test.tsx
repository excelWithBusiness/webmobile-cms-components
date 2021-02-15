import {cleanup} from '@testing-library/react';
import * as React from 'react';
import {IntroHeadingSection} from './';
import {mountWithTheme, Heading} from 'webmobile-sc-components';

describe('Landing:Components:IntroHeadingSection', () => {
  afterEach(cleanup);

  it('renders section with a Heading', () => {
    const myTestContent =
      'If you like Pina Coladas, and getting caught in the rain';

    const introHeadingSection = mountWithTheme(
      <IntroHeadingSection introHeading={myTestContent} />
    );
    const introHeading = introHeadingSection.find(Heading).first();
    expect(introHeading.text()).toBe(myTestContent);
  });
});
