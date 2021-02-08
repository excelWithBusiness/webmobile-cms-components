import { Elements } from 'prismic-reactjs'
import { RichTextBlock } from 'prismic-richtext'

export const getHeadline = (level = '1'): RichTextBlock => {
  return {
    type: `heading${level}`,
    text: `h${level} Headline`,
    spans: [],
  }
}

export const getParagraph = (): RichTextBlock => {
  return {
    type: Elements.paragraph,
    text: 'Normal text line',
    spans: [],
  }
}

export const getStrongParagraph = (): RichTextBlock => {
  return {
    type: Elements.paragraph,
    text: 'Bold text line',
    spans: [
      {
        start: 0,
        end: 14,
        type: 'strong',
      },
    ],
  }
}

export const getEmParagraph = (): RichTextBlock => {
  return {
    type: Elements.paragraph,
    text: 'em text line',
    spans: [
      {
        start: 0,
        end: 16,
        type: 'em',
      },
    ],
  }
}

export const getUrlParagraph = (): RichTextBlock => {
  return {
    type: Elements.paragraph,
    text: 'web link text line',
    spans: [
      {
        start: 0,
        end: 18,
        type: 'hyperlink',
        data: {
          link_type: 'Web',
          url: 'https://mediamarkt.de',
        },
      },
    ],
  }
}

export const getImage = (): RichTextBlock => {
  return {
    type: 'image',
    url:
      'https://mms-test.cdn.prismic.io/mms-test/' +
      'df94ace81ca3fe53fde90434b330541257cbc9c9_myaccount-retention-2018-deine-nacht-in-mm.jpg',
    alt: 'altText',
    copyright: null,
    dimensions: {
      width: 1920,
      height: 1080,
    },
  }
}

export const getListItem = (): RichTextBlock => {
  return {
    type: 'list-item',
    text: 'list item (1)',
    spans: [],
  }
}

export const getOrderedListItem = (): RichTextBlock => {
  return {
    type: 'o-list-item',
    text: 'ordered list item 1',
    spans: [],
  }
}
