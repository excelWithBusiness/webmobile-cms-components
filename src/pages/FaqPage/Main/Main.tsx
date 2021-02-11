import React, { memo } from 'react'
import { TopTeaser, Illustration01 } from '@excelwithbusiness/webmobile-sc-components'
import { prepareHeroContentProps } from '../../../helpers'

/**
 * This will be the TopTeaser for only a few select pages
 */
export const Main = memo(({ slices }: { slices: any[] }) => {
  return (
    <React.Fragment>
      {slices?.map((slice: any, index: number) => {
        const keyProp = `${slice?.type}_${index}`
        switch (slice?.type) {
          case 'HeroBanner':
            const heroProps = slice.pageComponents
              ? prepareHeroContentProps(slice.pageComponents)
              : null
            return (
              heroProps && (
                <TopTeaser
                  key={keyProp}
                  link={null}
                  color={!heroProps?.heroImages && 'primary'}
                  heroImages={heroProps?.heroImages}
                  images={heroProps?.images}
                  height={{ mobile: 250, tablet: 300, desktop: 400 }}
                  content={{ ...heroProps }}
                  svg={
                    !heroProps?.images &&
                    !heroProps?.heroImages && <Illustration01 height="350px" />
                  }
                />
              )
            )
          default:
            return null
        }
      })}
    </React.Fragment>
  )
})
