function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export var prepareEntries = function prepareEntries(_ref) {
  var pageComponents = _ref.pageComponents;
  return pageComponents.entries.map(function (_ref2) {
    var title = _ref2.title,
        description = _ref2.description;
    return {
      title: title,
      details: description
    };
  }).map(function (e, i) {
    return i === 0 ? _objectSpread(_objectSpread({}, e), {}, {
      isOpenInitially: true,
      noBorderTop: true
    }) : e;
  });
};
export var prepareHeroContentProps = function prepareHeroContentProps(heroBanner, name) {
  return {
    primary: heroBanner.primaryLabel,
    secondary: heroBanner.secondaryLabel,
    images: heroBanner.image ? {
      xl: heroBanner.image.url,
      lg: heroBanner.image.url,
      md: heroBanner.image.url,
      sm: heroBanner.image.url
    } : undefined,
    heroImages: heroBanner.heroImages ? {
      xl: heroBanner.heroImages[0].url,
      lg: heroBanner.heroImages[0].url,
      md: heroBanner.heroImages[0].url,
      sm: heroBanner.heroImages[0].url
    } : undefined,
    name: name
  };
};
//# sourceMappingURL=index.js.map