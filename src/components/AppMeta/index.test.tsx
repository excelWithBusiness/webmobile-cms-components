import React from 'react';
import {Helmet} from 'react-helmet';
import {mount, shallow} from 'enzyme';
import {AppMeta} from './';

const testLinks = ['https://t.co'];
const testPrefetchLinks = ['https://beacon.krxd.net'];

describe('AppMeta', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<AppMeta />);
    expect(wrapper).toBeDefined();
  });

  it('renders with the default props if no props are given', () => {
    const siteCanonical = 'https://www.filtered.com/';

    const wrapper = mount(
      <AppMeta
        title="Filtered"
        description="Filtered"
        generator="@excelwithbusiness/webmobile-cms-landing-pages"
        keywords="@excelwithbusiness/webmobile-cms-landing-pages"
        type="webpage"
        canonical={siteCanonical}
        storeName="Filtered"
        preconnectLinkList={testLinks}
        prefetchLinkList={testPrefetchLinks}
      />
    );
    expect(wrapper).toBeDefined();
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual('Filtered | Filtered');
    // @ts-expect-error https://github.com/nfl/react-helmet/issues/595
    expect(helmet.metaTags).toEqual([
      {name: 'description', content: 'Filtered'},
      {
        name: 'keywords',
        content: '@excelwithbusiness/webmobile-cms-landing-pages',
      },
      {
        name: 'generator',
        content: '@excelwithbusiness/webmobile-cms-landing-pages',
      },
      {property: 'og:title', content: 'Filtered'},
      {property: 'og:description', content: 'Filtered'},
      {property: 'og:type', content: 'webpage'},
      {property: 'og:image', content: ''},
      {property: 'og:site_name', content: 'Filtered'},
      {property: 'og:url', content: siteCanonical},
      {name: 'robots', content: 'noindex,follow'},
    ]);
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
        rel: 'preconnect',
        href: 'https://t.co',
      },
      {
        rel: 'preconnect dns-prefetch',
        href: 'https://beacon.krxd.net',
      },
    ]);
  });
});
