import React from 'react'
import { Helmet } from 'react-helmet'
import { AppMetaProps, AdditionalMeta } from './AppMeta.interface'

const MAX_LENGTH_OG_DESCRIPTION = 127

const defaultFontList = [
  'SourceSansPro-Bold.woff2',
  'SourceSansPro-Semibold.woff2',
  'SourceSansPro-Regular.woff2',
]

const defaultFontProps = {
  as: 'font',
  rel: 'preload',
  type: 'font/woff2',
  crossOrigin: 'anonymous',
}

const getFontLink = (name: string) => `/build/assets/${name}`

export const AppMeta: React.FC<AppMetaProps> = ({
  title = '',
  description = '',
  generator = 'webmobile-landing-pages',
  keywords,
  canonical = '',
  imageUrl = '',
  prev,
  next,
  type = 'webpage',
  fontList = defaultFontList,
  preconnectLinkList = [],
  prefetchLinkList = [],
  additionalMetas = [],
  includeStoreInTitle = true,
  storeName = '',
  children,
}) => {

  const additionalMeta: AdditionalMeta[] = additionalMetas.map((meta, index) => ({
    key: index.toString(),
    ...meta,
  }))
  const isRobotsInAdditionalMeta = additionalMeta.find(item => item.name === 'robots')
  !isRobotsInAdditionalMeta && additionalMeta.push({ name: 'robots', content: 'noindex,follow' })
  const titleTemplate = includeStoreInTitle ? `%s | ${storeName}` : '%s'
  const meta: AdditionalMeta[] = [
    { name: 'description', content: description || '' },
    { name: 'keywords', content: keywords || '' },
    { name: 'generator', content: generator },
    { property: 'og:title', content: title || '' },
    {
      property: 'og:description',
      content: (description || '').slice(0, MAX_LENGTH_OG_DESCRIPTION).trim(),
    },
    { property: 'og:type', content: type },
    { property: 'og:image', content: imageUrl },
    { property: 'og:site_name', content: storeName },
    { property: 'og:url', content: canonical },
    ...additionalMeta,
  ]

  const links = [
    ...(canonical ? [{ rel: 'canonical', href: canonical }] : []),
    ...(prev ? [{ rel: 'prev', href: prev }] : []),
    ...(next ? [{ rel: 'next', href: next }] : []),
    ...fontList.map(font => ({ ...defaultFontProps, href: getFontLink(font) })),
    ...preconnectLinkList.map(link => ({ rel: 'preconnect', href: link })),
    ...prefetchLinkList.map(link => ({ rel: 'preconnect dns-prefetch', href: link })),
  ]

  return (
    <Helmet
      titleTemplate={titleTemplate}
      defaultTitle={title || ''}
      htmlAttributes={{ lang: "en-GB" }}>
      {meta.map((entry, index) => {
        return <meta key={index} {...entry} />
      })}
      {links.map((entry, index) => {
        return <link key={index} {...entry} />
      })}
      <title>{title}</title>
      {children}
    </Helmet>
  )
}
