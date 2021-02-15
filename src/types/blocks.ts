/**
 * Map of all GraphCms block types. Blocks contain inline or block nodes.
 */
export enum BLOCKS {
  DOCUMENT = 'document',
  PARAGRAPH = 'paragraph',
  HEADING_1 = 'heading-one',
  HEADING_2 = 'heading-two',
  HEADING_3 = 'heading-three',
  HEADING_4 = 'heading-four',
  HEADING_5 = 'heading-five',
  HEADING_6 = 'heading-six',
  OL_LIST = 'ordered-list',
  UL_LIST = 'unordered-list',
  LIST_ITEM = 'list-item',
  HR = 'hr',
  QUOTE = 'blockquote',
  EMBEDDED_ASSET = 'image',
  EMBEDDED_MEDIA = 'iframe',
}

export default BLOCKS;
