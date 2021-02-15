import {cleanup} from '@testing-library/react';
import * as React from 'react';
import {TextSection} from './index';
import {mountWithTheme} from '@mms/webmobile-sc-components';
import {Elements, RichTextBlock} from 'prismic-reactjs';

const mockAnchorId = 'richTextAnchorId';

jest.mock('@mms/webmobile-config', () => ({
  useConfig: () => ({
    outlet: {subsidiary: 'MediaDE'},
  }),
}));

describe('Landing:Components:TextSection', () => {
  afterEach(cleanup);

  it('renders section with link and label', () => {
    const aliceRichText: RichTextBlock = {
      spans: [],
      type: Elements.paragraph,
      text: 'Alice and bob',
    };
    const textSection = mountWithTheme(
      <TextSection richText={[aliceRichText]} anchorId={mockAnchorId} />
    );
    const paragrpah = textSection.find('p').last();
    expect(paragrpah.text()).toBe(aliceRichText.text);
  });
});
