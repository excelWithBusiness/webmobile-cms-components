import React from 'react'
import { CopyText, Grid, Row, Cell, Offset } from 'webmobile-sc-components'
import { IntroTextSectionProps } from './IntroTextSection.types'
import { StyledIntroText } from './IntroText.styled'
import { CustomSection } from '../CustomSection'

export * from './IntroTextSection.types'

export const IntroTextSection: React.FC<IntroTextSectionProps> = ({ introText }) => {
  if (introText === null) return null
  return (
    <CustomSection>
      <StyledIntroText>
        <Grid>
          <Row noMargin>
            <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
            <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
              <CopyText fontSize="lg" tag="p">
                {introText}
              </CopyText>
            </Cell>
          </Row>
        </Grid>
      </StyledIntroText>
    </CustomSection>
  )
}
