import * as React from 'react';
import {
  Grid,
  Cell,
  Row,
  Offset,
} from '@excelwithbusiness/webmobile-sc-components';
import {AccordionSection, AccordionSchemaType} from '../AccordionSection';
import {FaqEntryType, FAQSectionProps} from './FaqSection.types';
import {StyledFAQ} from './FaqSection.styled';
import {CustomSection} from '../CustomSection';
import {Serializer} from '../Serializer/HtmlSerializer';
import {ConfigurableContentfulHtmlSerializer} from '../Serializer/ConfigurableContentfulHtmlSerializer';

export * from './FaqSection.types';

const mapFaqEntryToAccordionEntry = (entry: FaqEntryType) => ({
  entryHeadline: entry.question,
  entryContent: entry.answer,
  anchorId: entry.anchorId,
});
export const FAQSection: React.FC<FAQSectionProps> = ({entries, headline}) => {
  return (
    <StyledFAQ>
      {headline && (headline.length > 0 || (headline as any)) && (
        <CustomSection>
          <Grid>
            <Row noMargin>
              <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
              <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
                {Serializer(headline, ConfigurableContentfulHtmlSerializer({}))}
              </Cell>
            </Row>
          </Grid>
        </CustomSection>
      )}
      <AccordionSection
        entries={entries.map(entry => mapFaqEntryToAccordionEntry(entry))}
        schemaType={AccordionSchemaType.Faq}
        sectionColor="transparent"
      />
    </StyledFAQ>
  );
};
