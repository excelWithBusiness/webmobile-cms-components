import React from 'react';
import { Helmet } from 'react-helmet';
import { mount, shallow } from 'enzyme';
import { AppMeta } from "./";
var testLinks = ['https://t.co'];
var testPrefetchLinks = ['https://beacon.krxd.net'];
describe('AppMeta', function () {
  it('renders without crashing', function () {
    var wrapper = shallow(React.createElement(AppMeta, null));
    expect(wrapper).toBeDefined();
  });
  it('renders with the default props if no props are given', function () {
    var siteCanonical = 'https://www.filtered.com/';
    var wrapper = mount(React.createElement(AppMeta, {
      title: "Filtered",
      description: "Filtered",
      generator: "webmobile-cms-landing-pages",
      keywords: "webmobile-cms-landing-pages",
      type: "webpage",
      canonical: siteCanonical,
      storeName: "Filtered",
      preconnectLinkList: testLinks,
      prefetchLinkList: testPrefetchLinks
    }));
    expect(wrapper).toBeDefined();
    var helmet = Helmet.peek();
    expect(helmet.title).toEqual('Filtered | Filtered');
    expect(helmet.metaTags).toEqual([{
      name: 'description',
      content: 'Filtered'
    }, {
      name: 'keywords',
      content: 'webmobile-cms-landing-pages'
    }, {
      name: 'generator',
      content: 'webmobile-cms-landing-pages'
    }, {
      property: 'og:title',
      content: 'Filtered'
    }, {
      property: 'og:description',
      content: 'Filtered'
    }, {
      property: 'og:type',
      content: 'webpage'
    }, {
      property: 'og:image',
      content: ''
    }, {
      property: 'og:site_name',
      content: 'Filtered'
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
      rel: 'preconnect',
      href: 'https://t.co'
    }, {
      rel: 'preconnect dns-prefetch',
      href: 'https://beacon.krxd.net'
    }]);
  });
});
//# sourceMappingURL=index.test.js.map