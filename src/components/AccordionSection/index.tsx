import * as React from 'react';
import {useLocation} from 'react-router';
import {
  Grid,
  Cell,
  Row,
  Accordion,
  Offset,
} from '@excelwithbusiness/webmobile-sc-components';
import {
  AccordionSectionProps,
  AccordionSchemaType,
} from './AccordionSection.types';
import {StyledAccordionWrapper} from './AccordionSection.styled';
import {CustomSection} from '../CustomSection';
import {Serializer, ConfigurableContentfulHtmlSerializer} from '../Serializer';

export * from './AccordionSection.types';

export const AccordionSection: React.FC<AccordionSectionProps> = ({
  entries = [],
  sectionColor,
  textColor,
  customAccordionEntries,
  schemaType = AccordionSchemaType.Faq,
}) => {
  const location = useLocation();
  const anchoredAccordion = entries.find(
    entry => location.hash === `#${entry.anchorId}`
  );
  const openedIndex = anchoredAccordion && entries.indexOf(anchoredAccordion);

  const mappedAccordionEntries = entries.map(entry => {
    const accordionTitleComponent =
      entry.entryHeadline &&
      Serializer(
        entry.entryHeadline,
        ConfigurableContentfulHtmlSerializer({textColor})
      );

    return {
      details:
        entry.entryContent &&
        Serializer(
          entry.entryContent,
          ConfigurableContentfulHtmlSerializer({
            textColor,
            primaryColor: sectionColor,
          })
        ),
      title: entry.anchorId ? (
        <div id={entry.anchorId}>{accordionTitleComponent}</div>
      ) : (
        accordionTitleComponent
      ),
    };
  });

  return (
    <CustomSection color={sectionColor}>
      <Grid>
        <Row>
          <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
          <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
            <StyledAccordionWrapper textColor={textColor}>
              <Accordion
                customLabelHeading={{
                  bold: false,
                  margin: '0',
                  tag: 'div',
                }}
                entries={customAccordionEntries ?? mappedAccordionEntries}
                openedIndex={openedIndex}
              />
            </StyledAccordionWrapper>
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  );
};
