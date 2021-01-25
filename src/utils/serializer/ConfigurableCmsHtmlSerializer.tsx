import React from 'react'
import {
  CopyText,
  Heading,
  Link,
  Typo,
  HeroBanner
} from '@excelwithbusiness/webmobile-sc-components'
import {ZONES} from '@/types'
import {CmsAppHeader, CmsAppFooter} from "@/components";
import {CmsCallToActionPanel} from "../../components/CallToActionPanel/CallToActionPanel";

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
    [ZONES.HEADING_1]: (node: any, children: any) => (
      <Heading tag="h1" scale="level-1" bold={!!customProps.bold}>
        {children}
      </Heading>
    ),
    [ZONES.HEADING_2]: (node: any, children: any) => (
      <Heading tag="h2" scale="level-2" bold={!!customProps.bold}>
        {children}
      </Heading>
    ),
    [ZONES.HEADING_3]: (node: any, children: any) => (
      <Heading tag="h3" scale="level-3" bold={!!customProps.bold}>
        {children}
      </Heading>
    ),
    [ZONES.HEADING_4]: (node: any, children: any) => (
      <Heading tag="h4" scale="level-4" bold={!!customProps.bold}>
        {children}
      </Heading>
    ),
    [ZONES.HEADING_5]: (node: any, children: any) => (
      <Heading tag="h5" scale="level-4" bold={!!customProps.bold}>
        {children}
      </Heading>
    ),
    [ZONES.HEADING_6]: (node: any, children: any) => (
      <Heading tag="h6" scale="level-4" bold={!!customProps.bold}>
        {children}
      </Heading>
    ),
    [ZONES.PARAGRAPH]: (node: any, children: any) => (
      <CopyText
        color={customProps.color}
        fontSize={customProps.fontSize}
        withMargins={customProps.withMargins !== false}>
        {children}
      </CopyText>
    ),
    [ZONES.UL_LIST]: (node: any, children: any) => <Typo tag="ul">{children}</Typo>,
    [ZONES.OL_LIST]: (node: any, children: any) => <Typo tag="ol">{children}</Typo>,
    [ZONES.LIST_ITEM]: (node: any, children: any) => <Typo tag="li">{children}</Typo>,
    [ZONES.HERO_BANNER]: (node: any, children: any) => (
      <HeroBanner
        content={node.data.heroBanner}
        svg={customProps.illustration}
        color={customProps.color}/>
    ),
    [ZONES.CALL_TO_ACTION_PANEL]: (node: any, children: any) => (
      <CmsCallToActionPanel
        content={node.data.callToActionPanel}
        svg={customProps.illustration}
        withLQIP={false}
      />
    ),
    [ZONES.HEADER]: (node: any, children: any) => <CmsAppHeader headerContent={node.data.header}>,
    [ZONES.FOOTER]: (node: any, children: any) => <CmsAppFooter links={node.data.links} description={node.data.description} logoUrl={node.data.url} />,
    [ZONES.GENERIC_SECTION]: (node: any, children: any) => null,
    [ZONES.STATIC_PLAYLIST]: (node: any, children: any) => null,
    [ZONES.STATIC_PAGE_CONNECTION]: (node: any, children: any) => null,
    [ZONES.MULTI_COLUMN_SECTION]: (node: any, children: any) => null
  }

  return serialize
}
