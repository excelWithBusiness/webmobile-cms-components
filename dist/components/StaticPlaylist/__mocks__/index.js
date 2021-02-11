var _pageComponents, _pageComponents4, _pageComponents5;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var mockAsset = {
  __typename: 'Asset',
  id: 29104,
  image: 'http://www.newyorker.com/wp-content/uploads/2016/02/160229_r27718-887.jpg',
  niceName: '29104-shut-up-and-sit-down-why-the-leadership-industry-rules',
  url: 'https://www.newyorker.com/magazine/2016/02/29/our-dangerous-leadership-obsession',
  title: 'Shut Up and Sit Down: Why the leadership industry rules.',
  duration: '00:22',
  language: 'en',
  partOfSession: '0',
  provider: {
    __typename: 'Provider',
    id: 42,
    name: 'Lovefilm',
    logoUrl: ''
  },
  interaction: {
    __typename: 'Interaction',
    launched: false,
    bookmarked: true
  },
  type: {
    __typename: 'Type',
    id: 2,
    name: 'Article'
  },
  timebox: {
    __typename: 'Timebox',
    start: '0001-01-01T00:00:00Z',
    end: '0001-01-01T00:00:00Z'
  },
  competencies: [{
    __typename: 'Competency',
    id: 1507,
    text: 'Be respectful, to everyone'
  }, {
    __typename: 'Competency',
    id: 1508,
    text: 'Collaborate productively and harmoniously'
  }, {
    __typename: 'Competency',
    id: 1509,
    text: 'Be galvanised, galvanise!'
  }, {
    __typename: 'Competency',
    id: 1514,
    text: 'Be a lot more open than closed '
  }],
  author: 'Joshua Rothman',
  description: 'Rothman explores the environment in which leaders and leadership arises, claiming that “people who fetishize leadership sometimes find themselves longing for crisis”. He goes on to explore how leadership styles have evolved through the ages and the problems the modern leader faces.',
  embedVideoURL: '',
  sponsored: false
};
var mockAssets = [].concat(_toConsumableArray(mockAsset), _toConsumableArray(mockAsset), _toConsumableArray(mockAsset), _toConsumableArray(mockAsset), _toConsumableArray(mockAsset), _toConsumableArray(mockAsset), _toConsumableArray(mockAsset), _toConsumableArray(mockAsset));
var graphQlResponse = {
  data: {
    pageContent: {
      id: 'ckju3g3ww1w3u0948wzyij2fm',
      name: 'Home',
      type: 'Home',
      __typename: 'StaticPage',
      slices: [{
        id: 'ckju3fw740or909502ism9kye',
        stage: 'PUBLISHED',
        updatedAt: '2021-02-07T17:13:57.985762+00:00',
        name: 'Hero Banner',
        __typename: 'Zone',
        type: 'HeroBanner',
        pageComponents: (_pageComponents = {
          __typename: 'HeroBanner'
        }, _defineProperty(_pageComponents, "__typename", 'HeroBanner'), _defineProperty(_pageComponents, "id", 'ckkveocrckhn00f489q7qjdmc'), _defineProperty(_pageComponents, "heroImages", [{
          id: 'ckkvenk7kkd390a64wvt79y11',
          url: 'https://media.graphcms.com/sDUdG7zQTSpFg2s7DImg',
          __typename: 'Asset'
        }]), _defineProperty(_pageComponents, "image", null), _defineProperty(_pageComponents, "primaryLabel", ' '), _defineProperty(_pageComponents, "secondaryLabel", ' '), _pageComponents)
      }, {
        id: 'ckju3udsw0wfs0b12zw0tn8mf',
        stage: 'PUBLISHED',
        updatedAt: '2021-02-07T17:58:35.277318+00:00',
        name: 'Call to action 2',
        __typename: 'Zone',
        type: 'CallToAction',
        pageComponents: _defineProperty({
          __typename: 'CallToActionPanel',
          entryId: 'ckkveuxn4kcs00a45kp8e47jm',
          title: 'ESPGHAN 2021',
          rightOrientation: false,
          image: {
            url: 'https://media.graphcms.com/vtwGlPNTJG71wfHjBGVw',
            __typename: 'Asset'
          },
          heading: 'ESPGHAN 2021',
          description: 'The European Society for Paediatric Gastroenterology Hepatology and Nutrition (ESPGHAN) is a multi-professional organisation whose aim is to promote the health of children with special attention to the gastrointestinal tract, liver and nutritional status, through knowledge creation, the dissemination of science based information, the promotion of best practice in the delivery of care and the provision of high quality education for paediatric gastroenterology, hepatology and nutrition professionals in Europe and beyond.'
        }, "__typename", 'CallToActionPanel')
      }, {
        id: 'ckju3p5j425bn0a09y1jp71k6',
        stage: 'PUBLISHED',
        updatedAt: '2021-02-07T17:17:30.503598+00:00',
        name: 'Call to action 1',
        __typename: 'Zone',
        type: 'CallToAction',
        pageComponents: _defineProperty({
          __typename: 'CallToActionPanel',
          entryId: 'ckkvesn2wki9x0b07j394u17q',
          title: 'What you can expect?',
          rightOrientation: true,
          image: {
            url: 'https://media.graphcms.com/zcGIlAiRnSFoJhKYHcrQ',
            __typename: 'Asset'
          },
          heading: 'What you can expect?',
          description: 'As this will be a joined meeting between ESPGHAN and FISPGHAN, an even wider range of topics will be covered. In addition to State of the Art and Key Note Lectures from world leading experts in gastroenterology, hepatology and nutrition, topics will cover clinical practice in low income countries as well as updates from major stakeholders involved in paediatric health and disease. As in previous years, parallel sessions will consist of diverse and stimulating symposia and oral abstract presentations. A large e-poster exhibition will provide attendees from around the world with the opportunity to view and discuss latest results.'
        }, "__typename", 'CallToActionPanel')
      }, {
        id: 'ckju4332o2e7j0a09kk9pp6id',
        stage: 'PUBLISHED',
        updatedAt: '2021-02-07T17:21:40.407587+00:00',
        name: 'Playlist Section Top Recommendations',
        __typename: 'Zone',
        type: 'PlaylistSection',
        pageComponents: (_pageComponents4 = {
          __typename: 'StaticPlaylistSection',
          id: 'ckju327541p800948yb96kuxe',
          name: 'Top Recommendations'
        }, _defineProperty(_pageComponents4, "__typename", 'StaticPlaylistSection'), _defineProperty(_pageComponents4, "staticPlaylists", [{
          size: 3,
          staticAssetTiles: [{
            description: 'Quisque non ornare tellus vivamus pharetra elementum metus in scelerisque',
            id: 32001,
            type: 'Article',
            duration: '16 mins',
            provider: 'MEDICAL NEWS',
            competency: '5 Competencies',
            image: {
              url: 'https://media.graphcms.com/7JZcejcRkizOJDQZ2Mqt',
              __typename: 'Asset'
            },
            __typename: 'StaticAssetTile'
          }, {
            description: 'Suspendisse mauris est, commodo non justo in, posuere rutrum nulla',
            id: 32002,
            type: 'Article',
            duration: '16 mins',
            provider: 'BBC',
            competency: '6 COMPETENCIES',
            image: {
              url: 'https://media.graphcms.com/J25IRsKJSdCSPJPBNVmL',
              __typename: 'Asset'
            },
            __typename: 'StaticAssetTile'
          }, {
            description: 'Mauris vitae odio mollis, tempus mauris eu, varius tortor',
            id: 32003,
            type: 'Article',
            duration: '16 mins',
            provider: 'MEDICAL JOURNAL',
            competency: '5 COMPETENCIES',
            image: {
              url: 'https://media.graphcms.com/XnK6BwUGS1amE44l4l6n',
              __typename: 'Asset'
            },
            __typename: 'StaticAssetTile'
          }, {
            description: 'Quisque non ornare tellus vivamus pharetra elementum metus in scelerisque',
            id: 32001,
            type: 'Article',
            duration: '16 mins',
            provider: 'MEDICAL NEWS',
            competency: '5 COMPETENCIES',
            image: {
              url: 'https://media.graphcms.com/7JZcejcRkizOJDQZ2Mqt',
              __typename: 'Asset'
            },
            __typename: 'StaticAssetTile'
          }, {
            description: 'Suspendisse mauris est, commodo non justo in, posuere rutrum nulla',
            id: 32002,
            type: 'Article',
            duration: '16 mins',
            provider: 'BBC',
            competency: '6 COMPETENCIES',
            image: null,
            __typename: 'StaticAssetTile'
          }, {
            description: 'Mauris vitae odio mollis, tempus mauris eu, varius tortor',
            id: 32003,
            type: 'Article',
            duration: '16 mins',
            provider: 'MEDICAL JOURNEY',
            competency: '5 COMPETENCIES',
            image: {
              url: 'https://media.graphcms.com/CaLldJTzR52qxSgFihNX',
              __typename: 'Asset'
            },
            __typename: 'StaticAssetTile'
          }],
          __typename: 'StaticPlaylist'
        }]), _pageComponents4)
      }]
    }
  }
};
var staticPlaylist = {
  id: 'ckju4332o2e7j0a09kk9pp6id',
  stage: 'PUBLISHED',
  updatedAt: '2021-02-07T17:21:40.407587+00:00',
  name: 'Playlist Section Top Recommendations',
  __typename: 'Zone',
  type: 'PlaylistSection',
  pageComponents: (_pageComponents5 = {
    __typename: 'StaticPlaylistSection',
    id: 'ckju327541p800948yb96kuxe',
    name: 'Top Recommendations'
  }, _defineProperty(_pageComponents5, "__typename", 'StaticPlaylistSection'), _defineProperty(_pageComponents5, "staticPlaylists", [{
    size: 3,
    staticAssetTiles: [{
      description: 'Quisque non ornare tellus vivamus pharetra elementum metus in scelerisque',
      id: 32001,
      type: 'Article',
      duration: '16 mins',
      provider: 'MEDICAL NEWS',
      competency: '5 Competencies',
      image: {
        url: 'https://media.graphcms.com/7JZcejcRkizOJDQZ2Mqt',
        __typename: 'Asset'
      },
      __typename: 'StaticAssetTile'
    }, {
      description: 'Suspendisse mauris est, commodo non justo in, posuere rutrum nulla',
      id: 32002,
      type: 'Article',
      duration: '16 mins',
      provider: 'BBC',
      competency: '6 COMPETENCIES',
      image: {
        url: 'https://media.graphcms.com/J25IRsKJSdCSPJPBNVmL',
        __typename: 'Asset'
      },
      __typename: 'StaticAssetTile'
    }, {
      description: 'Mauris vitae odio mollis, tempus mauris eu, varius tortor',
      id: 32003,
      type: 'Article',
      duration: '16 mins',
      provider: 'MEDICAL JOURNAL',
      competency: '5 COMPETENCIES',
      image: {
        url: 'https://media.graphcms.com/XnK6BwUGS1amE44l4l6n',
        __typename: 'Asset'
      },
      __typename: 'StaticAssetTile'
    }, {
      description: 'Quisque non ornare tellus vivamus pharetra elementum metus in scelerisque',
      id: 32001,
      type: 'Article',
      duration: '16 mins',
      provider: 'MEDICAL NEWS',
      competency: '5 COMPETENCIES',
      image: {
        url: 'https://media.graphcms.com/7JZcejcRkizOJDQZ2Mqt',
        __typename: 'Asset'
      },
      __typename: 'StaticAssetTile'
    }, {
      description: 'Suspendisse mauris est, commodo non justo in, posuere rutrum nulla',
      id: 32002,
      type: 'Article',
      duration: '16 mins',
      provider: 'BBC',
      competency: '6 COMPETENCIES',
      image: null,
      __typename: 'StaticAssetTile'
    }, {
      description: 'Mauris vitae odio mollis, tempus mauris eu, varius tortor',
      id: 32003,
      type: 'Article',
      duration: '16 mins',
      provider: 'MEDICAL JOURNEY',
      competency: '5 COMPETENCIES',
      image: {
        url: 'https://media.graphcms.com/CaLldJTzR52qxSgFihNX',
        __typename: 'Asset'
      },
      __typename: 'StaticAssetTile'
    }],
    __typename: 'StaticPlaylist'
  }]), _pageComponents5)
};
//# sourceMappingURL=index.js.map