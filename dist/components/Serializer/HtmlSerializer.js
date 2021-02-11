import React from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicHtmlSerializer } from "./PrismicHtmlSerializer";
export var Serializer = function Serializer(content) {
  var prismicSerializer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PrismicHtmlSerializer;
  var key = arguments.length > 2 ? arguments[2] : undefined;

  if (key) {
    return React.createElement(RichText, {
      key: key,
      render: content,
      htmlSerializer: prismicSerializer
    });
  }

  return React.createElement(RichText, {
    render: content,
    htmlSerializer: prismicSerializer
  });
};
//# sourceMappingURL=HtmlSerializer.js.map