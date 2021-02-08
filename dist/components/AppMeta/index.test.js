import React from 'react';
import { Helmet } from 'react-helmet';
import { mount, shallow } from 'enzyme';
import { AppMeta } from "./";
var testLinks = ['https://t.co'];
var testPrefetchLinks = ['https://beacon.krxd.net'];
jest.mock('@mms/webmobile-config', function () {
  return {
    useConfig: function useConfig() {
      return {
        outlet: {
          locale: 'de-DE'
        },
        isContentfulActive: false
      };
    }
  };
});
describe('AppMeta', function () {
  it('renders without crashing', function () {
    var wrapper = shallow(React.createElement(AppMeta, null));
    expect(wrapper).toBeDefined();
  });
  it('renders with the default props if no props are given', function () {
    var siteCanonical = 'https://www.mediamarkt.de/';
    var wrapper = mount(React.createElement(AppMeta, {
      title: "MediaMarkt",
      description: "MediaMarkt",
      generator: "webmobile-pwa",
      keywords: "webmobile-pwa",
      type: "webpage",
      canonical: siteCanonical,
      storeName: "MediaMarkt",
      preconnectLinkList: testLinks,
      prefetchLinkList: testPrefetchLinks
    }));
    expect(wrapper).toBeDefined();
    var helmet = Helmet.peek();
    expect(helmet.title).toEqual('MediaMarkt | MediaMarkt');
    expect(helmet.metaTags).toEqual([{
      name: 'description',
      content: 'MediaMarkt'
    }, {
      name: 'keywords',
      content: 'webmobile-pwa'
    }, {
      name: 'generator',
      content: 'webmobile-pwa'
    }, {
      property: 'og:title',
      content: 'MediaMarkt'
    }, {
      property: 'og:description',
      content: 'MediaMarkt'
    }, {
      property: 'og:type',
      content: 'webpage'
    }, {
      property: 'og:image',
      content: ''
    }, {
      property: 'og:site_name',
      content: 'MediaMarkt'
    }, {
      property: 'og:url',
      content: siteCanonical
    }, {
      name: 'robots',
      content: 'noindex,follow'
    }]);
    expect(helmet.linkTags).toEqual([{
      rel: 'canonical',
      href: siteCanonical
    }, {
      as: 'font',
      rel: 'preload',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
      href: '/public/fonts/MMHeadlineProWebTT-Regular_subset.woff2'
    }, {
      as: 'font',
      rel: 'preload',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
      href: '/public/fonts/SourceSansPro-Bold.woff2'
    }, {
      as: 'font',
      rel: 'preload',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
      href: '/public/fonts/SourceSansPro-Semibold.woff2'
    }, {
      as: 'font',
      rel: 'preload',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
      href: '/public/fonts/SourceSansPro-Regular.woff2'
    }, {
      as: 'font',
      rel: 'preload',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
      href: '/public/fonts/MediaMarktPreise.woff2'
    }, {
      rel: 'preconnect',
      href: 'https://t.co'
    }, {
      rel: 'preconnect dns-prefetch',
      href: 'https://beacon.krxd.net'
    }]);
  });
});
//# sourceMappingURL=index.test.js.map