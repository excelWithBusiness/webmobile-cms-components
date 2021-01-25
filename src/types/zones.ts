/**
 * Map of all CMS block types. Zones contain component nodes.
 */
declare enum ZONES {
  HEADING_1 = "heading-1",
  HEADING_2 = "heading-2",
  HEADING_3 = "heading-3",
  HEADING_4 = "heading-4",
  HEADING_5 = "heading-5",
  HEADING_6 = "heading-6",
  OL_LIST = "ordered-list",
  UL_LIST = "unordered-list",
  LIST_ITEM = "list-item",
  CALL_TO_ACTION_PANEL = 'CallToActionPanel',
  HERO_BANNER = 'CallToActionPanel',
  GENERIC_SECTION = 'GenericSection',
  MULTI_COLUMN_SECTION = 'MultiColumnSection',
  STATIC_PAGE_CONNECTION = 'StaticPageConnection',
  STATIC_PLAYLIST = 'StaticPlaylist',
  HEADER: 'Header',
  FOOTER: 'Footer',
}

export default ZONES;
