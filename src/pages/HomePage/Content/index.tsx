import React from 'react'
import { Section } from '@excelwithbusiness/webmobile-sc-components'
// @ts-ignore-next-line
import { CmsCallToActionPanel } from '../../../components/CallToActionPanel'
import { StaticPlaylist } from '../../../components/StaticPlaylist'
import { formatToStaticAsset } from '../../../helpers'

export const Content = ({ slices }: { slices: any[] }) => {
  if (!Array.isArray(slices) || !slices.length) {
    return null
  }

  return (
    <Section>
      {slices?.map((slice: any, index: number) => {
        const keyProp = `${slice?.type}_${index}`
        switch (slice?.type) {
          case 'CallToAction':
            console.log('matched CallToAction')
            return <CmsCallToActionPanel content={slice.pageComponents} />
          case 'PlaylistSection':
            console.log('matched PlaylistSection')

            const staticAssets = [...slice.pageComponents.staticPlaylists[0].staticAssetTiles]
            const assetsToStatic = formatToStaticAsset(staticAssets)

            return (
              <StaticPlaylist
                key={keyProp}
                name={slice.name}
                title={slice.pageComponents.name}
                type={slice.pageComponents.__typename}
                context="StaticPlaylist"
                id={slice.id}
                showLock
                showBookmark={false}
                loading={!slice.pageComponents.staticPlaylists[0]}
                tooltip="Not found where this us yet!!"
                desktop={slice.size}
                assets={[...assetsToStatic]}
              />
            )
          default:
            return null
        }
      })}
    </Section>
  )
}
