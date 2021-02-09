import * as React from 'react'

import { Grid, Cell, Row, Offset } from 'webmobile-sc-components'
import { HeadlineSectionProps } from './HeadlineSection.types'
import { CustomSection } from '../CustomSection'
import { ConfigurablePrismicHtmlSerializer, Serializer } from '../Serializer'

export * from './HeadlineSection.types'

export const HeadlineSection: React.FC<HeadlineSectionProps> = ({
  headline,
  anchorId,
  textColor,
  sectionColor,
}) => {
  return (
    <CustomSection id={anchorId} color={sectionColor}>
      <Grid>
        <Row noMargin>
          <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
          <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
            {Serializer(headline, ConfigurablePrismicHtmlSerializer({ textColor }))}
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  )
}
