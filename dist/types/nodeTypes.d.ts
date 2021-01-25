import { Zone } from './types';
import ZONES from './zones';
declare type EmptyNodeData = {};
export interface CallToActionPanel extends Zone {
    nodeType: ZONES.CALL_TO_ACTION_PANEL;
    data: EmptyNodeData;
}
export interface HeroBanner extends Zone {
    nodeType: ZONES.HERO_BANNER;
    data: EmptyNodeData;
}
export interface GenericSection extends Zone {
    nodeType: ZONES.GENERIC_SECTION;
    data: EmptyNodeData;
}
export interface MultiColumnSection extends Zone {
    nodeType: ZONES.MULTI_COLUMN_SECTION;
    data: EmptyNodeData;
}
export interface StaticPageConnection extends Zone {
    nodeType: ZONES.STATIC_PAGE_CONNECTION;
    data: EmptyNodeData;
}
export interface StaticPlaylist extends Zone {
    nodeType: ZONES.STATIC_PLAYLIST;
    data: EmptyNodeData;
}
export interface Header extends Zone {
    nodeType: ZONES.HEADER;
    data: EmptyNodeData;
}
export interface Footer extends Zone {
    nodeType: ZONES.FOOTER;
    data: EmptyNodeData;
}
export {};
//# sourceMappingURL=nodeTypes.d.ts.map