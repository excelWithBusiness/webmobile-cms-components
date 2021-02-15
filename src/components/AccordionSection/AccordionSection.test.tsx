import {cleanup} from '@testing-library/react';
import * as React from 'react';
import {AccordionSection} from './index';
import {
  AccordionSectionProps,
  AccordionSchemaType,
} from './AccordionSection.types';
import {
  mountWithTheme,
  Accordion,
  CopyText,
  Heading,
} from '@excelwithbusiness/webmobile-sc-components';

import router from 'react-router';

const testText =
  'Never gonna give you up Never gonna let you down Never gonna run around and desert you';
const accordionEntries: AccordionSectionProps = {
  entries: [
    {
      anchorId: 'letmeanchoryou',
      entryHeadline: [{type: 'heading3', text: "It's a headline", spans: []}],
      entryContent: [
        {
          type: 'paragraph',
          text: testText,
        },
      ],
    },
  ],
};

describe('Content:Common:Components:AccordionSection', () => {
  afterEach(cleanup);

  describe('closed accordion', () => {
    beforeEach(() => {
      jest.spyOn(router, 'useLocation').mockReturnValue({
        pathname: '/let/me/be/your/pathName',
        hash: '',
        search: '',
        state: {},
      });
    });

    it('renders closed accordion', () => {
      const accordionSection = mountWithTheme(
        <AccordionSection
          schemaType={AccordionSchemaType.Faq}
          entries={accordionEntries.entries}
        />
      );
      const accordion = accordionSection.find(Accordion);
      expect(accordion.prop('openedIndex')).toBeUndefined();
    });
  });

  describe('open accordion', () => {
    beforeAll(() => {
      jest.spyOn(router, 'useLocation').mockReturnValue({
        pathname: '/let/me/be/your/pathName',
        hash: '#letmeanchoryou',
        search: '',
        state: {},
      });
    });

    it('renders open accordion', () => {
      const accordionSection = mountWithTheme(
        <AccordionSection
          schemaType={AccordionSchemaType.Faq}
          entries={accordionEntries.entries}
        />
      );
      const accordion = accordionSection.find(Accordion);
      expect(accordion.prop('openedIndex')).toBe(0);
    });

    it('renders section with accordion and content', () => {
      const accordionSection = mountWithTheme(
        <AccordionSection entries={accordionEntries.entries} />
      );
      const title = accordionSection.find(Heading).first();
      expect(title.text()).toBe("It's a headline");
      const content = accordionSection.find(CopyText).first();
      expect(content.text()).toBe(testText);
    });

    it('renders accordion with a default none schemaType', () => {
      const accordionSection = mountWithTheme(
        <AccordionSection entries={accordionEntries.entries} />
      );
      const accordion = accordionSection.find(Accordion);
      expect(accordion.prop('schemaType')).toBe(AccordionSchemaType.None);
    });

    it('renders accordion with a FAQ schemaType', () => {
      const accordionSection = mountWithTheme(
        <AccordionSection
          schemaType={AccordionSchemaType.Faq}
          entries={accordionEntries.entries}
        />
      );
      const accordion = accordionSection.find(Accordion);
      expect(accordion.prop('schemaType')).toBe(AccordionSchemaType.Faq);
    });
  });
});
