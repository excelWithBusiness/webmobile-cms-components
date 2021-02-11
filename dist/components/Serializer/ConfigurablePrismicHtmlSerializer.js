import * as React from 'react';
import { Elements } from 'prismic-reactjs';
import { Picture, CopyText, Heading, Link, Typo } from 'webmobile-sc-components';
export var ConfigurablePrismicHtmlSerializer = function ConfigurablePrismicHtmlSerializer() {
  var customProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (type, element, text, children, index) {
    switch (type) {
      case Elements.heading1:
        return React.createElement(Heading, {
          key: index,
          tag: "h1",
          scale: "level-1",
          bold: !!customProps.bold
        }, children);

      case Elements.heading2:
        return React.createElement(Heading, {
          key: index,
          tag: "h2",
          scale: "level-2",
          bold: !!customProps.bold
        }, children);

      case Elements.heading3:
        return React.createElement(Heading, {
          key: index,
          tag: "h3",
          scale: "level-3",
          bold: !!customProps.bold
        }, children);

      case Elements.heading4:
        return React.createElement(Heading, {
          key: index,
          tag: "h4",
          scale: "level-4",
          bold: !!customProps.bold
        }, children);

      case Elements.heading5:
        return React.createElement(Heading, {
          key: index,
          tag: "h5",
          scale: "level-4",
          bold: !!customProps.bold
        }, children);

      case Elements.heading6:
        return React.createElement(Heading, {
          key: index,
          tag: "h6",
          scale: "level-4",
          bold: !!customProps.bold
        }, children);

      case Elements.paragraph:
        return React.createElement(CopyText, {
          color: customProps.color,
          fontSize: customProps.fontSize,
          withMargins: customProps.withMargins !== false,
          key: index
        }, children);

      case Elements.strong:
        return React.createElement(CopyText, {
          tag: "strong",
          key: index,
          bold: !!customProps.bold
        }, children);

      case Elements.em:
        return React.createElement(CopyText, {
          tag: "em",
          key: index
        }, children);

      case Elements.oListItem:
      case Elements.listItem:
        return React.createElement(Typo, {
          tag: "li",
          key: index
        }, children);

      case Elements.list:
        return React.createElement(Typo, {
          tag: "ul",
          key: index
        }, children);

      case Elements.oList:
        return React.createElement(Typo, {
          tag: "ol",
          key: index
        }, children);

      case Elements.image:
        return React.createElement(Picture, {
          src: element.url,
          alt: element.alt,
          width: element.dimensions.width,
          height: element.dimensions.height
        });

      case Elements.hyperlink:
        if (element.data.url) {
          var _element$data;

          return React.createElement(Link, {
            href: element.data.url,
            underline: true,
            inline: Boolean(customProps.inline),
            key: index,
            target: (element === null || element === void 0 ? void 0 : (_element$data = element.data) === null || _element$data === void 0 ? void 0 : _element$data.target) || '_self'
          }, children);
        }

        break;

      default:
        return null;
    }
  };
};
//# sourceMappingURL=ConfigurablePrismicHtmlSerializer.js.map