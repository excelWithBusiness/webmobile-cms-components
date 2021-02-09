import * as React from 'react'
import { Card, Grid, Cell, Row, Offset } from 'webmobile-sc-components'
import { GroupRichTextSectionProps, GroupRichTextFieldType } from './GroupRichTextSection.types'
import {
  ConfigurablePrismicHtmlSerializer,
  ConfigurableContentfulHtmlSerializer,
} from '../../helpers'
import {
  StyledCardRichText,
  StyledCardHeadline,
  StyledGroupRichText,
} from './GroupRichTextSection.styled'
import { HeadlineSection } from '../HeadlineSection'
import { CustomSection } from '../CustomSection'
import { Serializer } from '../Serializer/HtmlSerializer'

export * from './GroupRichTextSection.types'

const renderTextRows = (fields: GroupRichTextFieldType[], isContentfulActive: boolean) => {
  return fields.map((field: GroupRichTextFieldType, index: number) => {
    return (
      field.textField && (
        <CustomSection key={index}>
          <Grid>
            {Serializer(
              field.textField,
              isContentfulActive,
              ConfigurablePrismicHtmlSerializer({}),
              ConfigurableContentfulHtmlSerializer({})
            )}
          </Grid>
        </CustomSection>
      )
    )
  })
}

export const GroupRichTextSection: React.FC<GroupRichTextSectionProps> = ({
  fields,
  sectionColor,
  anchorId,
}) => {
  const { isContentfulActive } = useConfig()

  return (
    <StyledGroupRichText id={anchorId ?? undefined}>
      <CustomSection color={sectionColor}>
        <Grid>
          <Row noMargin>
            <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
            <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
              <Card
                elevation={0}
                elevationHover={0}
                padding="md"
                shape="rounded-big"
                surface="white">
                <StyledCardHeadline>
                  <HeadlineSection headline={fields[0]?.title} />
                </StyledCardHeadline>
                <StyledCardRichText>
                  {renderTextRows(fields, isContentfulActive)}
                </StyledCardRichText>
              </Card>
            </Cell>
          </Row>
        </Grid>
      </CustomSection>
    </StyledGroupRichText>
  )
}
