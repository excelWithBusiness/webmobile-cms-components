import React from 'react';
import { Elements } from 'prismic-reactjs';
import { CopyText, Link, Lists, Heading } from 'webmobile-sc-components';
export var PrismicHtmlSerializer = function PrismicHtmlSerializer(type, element, content, children, key) {
  switch (type) {
    case Elements.heading1:
      return React.createElement(Heading, {
        tag: "h1",
        scale: "level-1",
        margin: "0 0 lg 0",
        fontFamily: "branded",
        key: key
      }, children);

    case Elements.heading2:
      return React.createElement(Heading, {
        tag: "h2",
        scale: "level-2",
        margin: "0 0 lg 0",
        bold: true,
        key: key
      }, children);

    case Elements.heading3:
      return React.createElement(Heading, {
        tag: "h3",
        scale: "level-3",
        margin: "0 0 md 0",
        bold: true,
        key: key
      }, children);

    case Elements.heading4:
      return React.createElement(Heading, {
        tag: "h4",
        scale: "level-4",
        margin: "0 0 sm 0",
        key: key
      }, children);

    case Elements.heading5:
      return React.createElement(Heading, {
        tag: "h4",
        fontFamily: "branded",
        color: "primary",
        margin: "0 0 sm 0",
        fontSize: "xl",
        scale: "level-4",
        key: key
      }, children);

    case Elements.heading6:
      return React.createElement(Heading, {
        tag: "h4",
        fontFamily: "branded",
        color: "primary",
        margin: "0 0 sm 0",
        fontSize: "xl",
        scale: "level-4",
        key: key
      }, children);

    case Elements.paragraph:
      return React.createElement(CopyText, {
        fontSize: "sm",
        tag: "p",
        withMargins: true,
        key: key
      }, children);

    case Elements.oList:
      return React.createElement(Lists, {
        ordered: true,
        withMargin: true,
        key: key
      }, children);

    case Elements.list:
      return React.createElement(Lists, {
        withMargin: true,
        key: key
      }, children);

    case Elements.hyperlink:
      {
        if (element.data.url) {
          return React.createElement(Link, {
            href: element.data.url,
            fontSize: "sm",
            inline: true,
            key: key
          }, children);
        } else {
          return children;
        }
      }

    default:
      return null;
  }
};
//# sourceMappingURL=PrismicHtmlSerializer.js.map