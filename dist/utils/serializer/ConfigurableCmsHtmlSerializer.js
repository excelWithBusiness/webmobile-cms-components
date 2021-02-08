function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { ZONES } from "../../types";
export var ConfigurableCmsHtmlSerializer = function ConfigurableCmsHtmlSerializer() {
  var _serialize;

  var customProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var slice = arguments.length > 1 ? arguments[1] : undefined;
  var children = arguments.length > 2 ? arguments[2] : undefined;
  var serialize = (_serialize = {}, _defineProperty(_serialize, ZONES.CALL_TO_ACTION_PANEL, function (slice, children) {
    return null;
  }), _defineProperty(_serialize, ZONES.HEADER, function (slice, children) {
    return null;
  }), _defineProperty(_serialize, ZONES.FOOTER, function (slice, children) {
    return null;
  }), _defineProperty(_serialize, ZONES.GENERIC_SECTION, function (slice, children) {
    return null;
  }), _defineProperty(_serialize, ZONES.STATIC_PLAYLIST, function (slice, children) {
    return null;
  }), _defineProperty(_serialize, ZONES.STATIC_PAGE_CONNECTION, function (slice, children) {
    return null;
  }), _defineProperty(_serialize, ZONES.MULTI_COLUMN_SECTION, function (slice, children) {
    return null;
  }), _serialize);
  return serialize;
};
//# sourceMappingURL=ConfigurableCmsHtmlSerializer.js.map