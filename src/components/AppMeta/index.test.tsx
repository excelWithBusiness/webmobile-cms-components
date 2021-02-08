import React from 'react'
import { Helmet } from 'react-helmet'
import { mount, shallow } from 'enzyme'
import { AppMeta } from './'

const testLinks = ['https://t.co']
const testPrefetchLinks = ['https://beacon.krxd.net']

jest.mock('@mms/webmobile-config', () => ({
  useConfig: () => ({
    outlet: { locale: 'de-DE' },
    isContentfulActive: false,
  }),
}))

describe('AppMeta', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<AppMeta />)
    expect(wrapper).toBeDefined()
  })

  it('renders with the default props if no props are given', () => {
    const siteCanonical = 'https://www.mediamarkt.de/'

    const wrapper = mount(
      <AppMeta
        title="MediaMarkt"
        description="MediaMarkt"
        generator="webmobile-pwa"
        keywords="webmobile-pwa"
        type="webpage"
        canonical={siteCanonical}
        storeName="MediaMarkt"
        preconnectLinkList={testLinks}
        prefetchLinkList={testPrefetchLinks}
      />
    )
    expect(wrapper).toBeDefined()
    const helmet = Helmet.peek()
    expect(helmet.title).toEqual('MediaMarkt | MediaMarkt')
    // @ts-expect-error https://github.com/nfl/react-helmet/issues/595
    expect(helmet.metaTags).toEqual([
      { name: 'description', content: 'MediaMarkt' },
      { name: 'keywords', content: 'webmobile-pwa' },
      { name: 'generator', content: 'webmobile-pwa' },
      { property: 'og:title', content: 'MediaMarkt' },
      { property: 'og:description', content: 'MediaMarkt' },
      { property: 'og:type', content: 'webpage' },
      { property: 'og:image', content: '' },
      { property: 'og:site_name', content: 'MediaMarkt' },
      { property: 'og:url', content: siteCanonical },
      { name: 'robots', content: 'noindex,follow' },
    ])
    // @ts-expect-error https://github.com/nfl/react-helmet/issues/595
    expect(helmet.linkTags).toEqual([
      {
        rel: 'canonical',
        href: siteCanonical,
      },
      {
        as: 'font',
        rel: 'preload',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
        href: '/public/fonts/MMHeadlineProWebTT-Regular_subset.woff2',
      },
      {
        as: 'font',
        rel: 'preload',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
        href: '/public/fonts/SourceSansPro-Bold.woff2',
      },
      {
        as: 'font',
        rel: 'preload',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
        href: '/public/fonts/SourceSansPro-Semibold.woff2',
      },
      {
        as: 'font',
        rel: 'preload',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
        href: '/public/fonts/SourceSansPro-Regular.woff2',
      },
      {
        as: 'font',
        rel: 'preload',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
        href: '/public/fonts/MediaMarktPreise.woff2',
      },
      {
        rel: 'preconnect',
        href: 'https://t.co',
      },
      {
        rel: 'preconnect dns-prefetch',
        href: 'https://beacon.krxd.net',
      },
    ])
  })
})
