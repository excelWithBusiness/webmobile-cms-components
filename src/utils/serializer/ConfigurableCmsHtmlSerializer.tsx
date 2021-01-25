import React from 'react'
import { HeroBanner } from '@excelwithbusiness/webmobile-sc-components'
import { ZONES } from '../../types'
import { CmsCallToActionPanel } from '../../components/CallToActionPanel/CallToActionPanel'
import { CmsAppHeader } from '../../components/CmsAppHeader'
import { CmsAppFooter } from '../../components/CmsAppFooter'

interface SerializerCustomProps {
  bold?: boolean
  color?: string
  fontSize?: string
  withMargins?: boolean
  inline?: boolean
  content?: {}
}

export const ConfigurableCmsHtmlSerializer = (customProps: SerializerCustomProps = {}) => (
  render: unknown
) => {
  const serialize = {
    [ZONES.HERO_BANNER]: (node: any, children: any) => (
      <HeroBanner
        alignment={node.data.alignment}
        content={node.data.heroBanner}
        color={customProps.color}
      />
    ),
    [ZONES.CALL_TO_ACTION_PANEL]: (node: any, children: any) => (
      <CmsCallToActionPanel
        alignment={node.data.leftAlignment}
        content={node.data.callToActionPanel}
        withLQIP={false}
      />
    ),
    [ZONES.HEADER]: (node: any, children: any) => (
      <CmsAppHeader
        headerContent={node.data.header}
        button={node.data.button}
        socialSharing={<></>}
        logoUrl={node.data.url}
        onLogoClick={() => null}
      />
    ),
    [ZONES.FOOTER]: (node: any, children: any) => (
      <CmsAppFooter
        links={node.data.links}
        description={node.data.description}
        logoUrl={node.data.url}
      />
    ),
    [ZONES.GENERIC_SECTION]: (node: any, children: any) => null,
    [ZONES.STATIC_PLAYLIST]: (node: any, children: any) => null,
    [ZONES.STATIC_PAGE_CONNECTION]: (node: any, children: any) => null,
    [ZONES.MULTI_COLUMN_SECTION]: (node: any, children: any) => null,
  }

  return serialize
}
