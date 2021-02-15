import React from 'react';
import {
  CopyText,
  Grid,
  Row,
  Cell,
  Offset,
  Heading,
} from 'webmobile-sc-components';
import {IntroHeadingSectionProps} from './IntroHeadingSection.types';
import {StyledIntroHeadingText} from './IntroHeading.styled';
import {CustomSection} from '../CustomSection';
import {Serializer} from '../Serializer/HtmlSerializer';
import {ConfigurableContentfulHtmlSerializer} from '../Serializer/ConfigurableContentfulHtmlSerializer';

export * from './IntroHeadingSection.types';

export const IntroHeadingSection: React.FC<IntroHeadingSectionProps> = ({
  introHeading,
}) => {
  if (introHeading === null) return null;
  return (
    <CustomSection>
      <StyledIntroHeadingText>
        <Grid>
          <Row noMargin>
            <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
            <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
              <Heading scale="level-1" margin="md auto" textAlign="center">
                {Serializer(
                  introHeading,
                  ConfigurableContentfulHtmlSerializer({})
                )}
              </Heading>
            </Cell>
          </Row>
        </Grid>
      </StyledIntroHeadingText>
    </CustomSection>
  );
};
