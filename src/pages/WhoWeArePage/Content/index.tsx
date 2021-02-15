import React from 'react'
import { CustomSection } from '../../../components'
import { CmsCallToActionPanel } from '../../../components/CallToActionPanel'

export const Content = ({ slices }: { slices: any[] }) => {
  return (
    <CustomSection>
      {slices?.map((slice: any, index: number) => {
        const keyProp = `${slice?.__typename}_${index}`
        switch (slice?.__typename) {
          case 'CallToAction':
            console.log('matched CallToAction')
            return <CmsCallToActionPanel content={slice.pageComponents} />
          default:
            return null
        }
      })}
    </CustomSection>
  )
}
