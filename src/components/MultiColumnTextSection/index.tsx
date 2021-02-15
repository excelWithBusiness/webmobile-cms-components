import * as React from 'react'
import { Grid, Cell, Row } from '@excelwithbusiness/webmobile-sc-components'
import { MultiColumnTextSectionSectionProps } from './MultiColumnTextSection.types'
import { StyledMultiColumnTextSection } from './MultiColumnTextSection.styled'
import { CustomSection } from '../CustomSection'
import { Serializer, ConfigurableContentfulHtmlSerializer } from '../Serializer'
import { RichTextBlock } from '../../types/graphcms-richtext'

export * from './MultiColumnTextSection.types'

export const MultiColumnTextSection: React.FC<MultiColumnTextSectionSectionProps> = ({
  richTextEntries,
  sectionColor,
  anchorId,
  textColor,
}) => {
  const renderMultiColumns = (richText: RichTextBlock) => {
    return (
      <Cell colsXl={6} colsLg={6} colsMd={4} colsSm={8} colsXs={4}>
        <StyledMultiColumnTextSection color={textColor} id={anchorId ?? undefined}>
          {Serializer(richText, ConfigurableContentfulHtmlSerializer({}))}
        </StyledMultiColumnTextSection>
      </Cell>
    )
  }

  return (
    <CustomSection color={sectionColor}>
      <Grid>
        <Row>{richTextEntries.map(renderMultiColumns)}</Row>
      </Grid>
    </CustomSection>
  )
}
