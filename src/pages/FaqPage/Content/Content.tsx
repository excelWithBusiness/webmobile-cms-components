import React from 'react'
import {
  Cell,
  Grid,
  Offset,
  Row,
  Section,
  Spacer,
  Accordion,
} from '@excelwithbusiness/webmobile-sc-components'

export const prepareEntries = ({ pageComponents }) =>
  pageComponents.entries
    .map(({ title, description }) => ({
      title,
      details: description,
    }))
    .map((e, i) =>
      i === 0
        ? {
            ...e,
            isOpenInitially: true,
            noBorderTop: true,
          }
        : e
    )

export const Content = ({ slices }: { slices: any[] }) => {
  if (!Array.isArray(slices) || !slices.length) {
    return null
  }

  return (
    <Section>
      {slices?.map((slice: any, index: number) => {
        const keyProp = `${slice?.type}_${index}`
        switch (slice?.type) {
          case 'Accordion':
            return (
              <Grid>
                <Row>
                  <Offset colsXs={0} columns={1} />
                  <Cell columns={10}>
                    <Spacer size="md" />
                    <Accordion
                      key={keyProp}
                      entries={prepareEntries(slice)}
                      isLarge
                      withIconsOnRight
                    />
                  </Cell>
                </Row>
              </Grid>
            )
          default:
            return null
        }
      })}
    </Section>
  )
}
