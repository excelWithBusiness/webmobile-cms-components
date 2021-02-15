import * as React from 'react';
import {Grid, Cell, Row, Offset} from 'webmobile-sc-components';
import {TextSectionProps} from './TextSection.types';
import {StyledTextSection} from './TextSection.styled';
import {CustomSection} from '../CustomSection';

import {Serializer} from '../Serializer/HtmlSerializer';
import {ContentfulHtmlSerializer} from '../Serializer/ContentfulHtmlSerializer';
import {ConfigurableContentfulHtmlSerializer} from '../Serializer/ConfigurableContentfulHtmlSerializer';

export * from './TextSection.types';

export const TextSection: React.FC<TextSectionProps> = ({
  richText,
  sectionColor,
  active,
  anchorId,
  textColor,
  primaryColor,
}) => {
  return (
    <CustomSection color={sectionColor}>
      <Grid>
        <Row noMargin>
          <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
          <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
            <StyledTextSection
              color={textColor}
              active={active}
              id={anchorId ?? undefined}
            >
              {Serializer(
                richText,
                ConfigurableContentfulHtmlSerializer({inline: true})
              )}
            </StyledTextSection>
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  );
};
