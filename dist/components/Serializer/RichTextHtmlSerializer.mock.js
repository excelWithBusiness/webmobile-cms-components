import { Elements } from 'prismic-reactjs';
export var getHeadline = function getHeadline() {
  var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';
  return {
    type: "heading".concat(level),
    text: "h".concat(level, " Headline"),
    spans: []
  };
};
export var getParagraph = function getParagraph() {
  return {
    type: Elements.paragraph,
    text: 'Normal text line',
    spans: []
  };
};
export var getStrongParagraph = function getStrongParagraph() {
  return {
    type: Elements.paragraph,
    text: 'Bold text line',
    spans: [{
      start: 0,
      end: 14,
      type: 'strong'
    }]
  };
};
export var getEmParagraph = function getEmParagraph() {
  return {
    type: Elements.paragraph,
    text: 'em text line',
    spans: [{
      start: 0,
      end: 16,
      type: 'em'
    }]
  };
};
export var getUrlParagraph = function getUrlParagraph() {
  return {
    type: Elements.paragraph,
    text: 'web link text line',
    spans: [{
      start: 0,
      end: 18,
      type: 'hyperlink',
      data: {
        link_type: 'Web',
        url: 'https://mediamarkt.de'
      }
    }]
  };
};
export var getImage = function getImage() {
  return {
    type: 'image',
    url: 'https://mms-test.cdn.prismic.io/mms-test/' + 'df94ace81ca3fe53fde90434b330541257cbc9c9_myaccount-retention-2018-deine-nacht-in-mm.jpg',
    alt: 'altText',
    copyright: null,
    dimensions: {
      width: 1920,
      height: 1080
    }
  };
};
export var getListItem = function getListItem() {
  return {
    type: 'list-item',
    text: 'list item (1)',
    spans: []
  };
};
export var getOrderedListItem = function getOrderedListItem() {
  return {
    type: 'o-list-item',
    text: 'ordered list item 1',
    spans: []
  };
};
//# sourceMappingURL=RichTextHtmlSerializer.mock.js.map