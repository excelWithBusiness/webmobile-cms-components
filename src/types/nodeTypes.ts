import { Zone, Text, ZONES } from '@/types';

declare type EmptyNodeData = {};

export interface Heading1 extends Zone {
  nodeType: ZONES.HEADING_1;
  data: EmptyNodeData;
  content: Array<Text>;
}

export interface Heading2 extends Zone {
  nodeType: ZONES.HEADING_2;
  data: EmptyNodeData;
  content: Array<Text>;
}

export interface Heading3 extends Zone {
  nodeType: ZONES.HEADING_3;
  data: EmptyNodeData;
  content: Array<Text>;
}

export interface Heading4 extends Zone {
  nodeType: ZONES.HEADING_4;
  data: EmptyNodeData;
  content: Array<Text>;
}

export interface Heading5 extends Zone {
  nodeType: ZONES.HEADING_5;
  data: EmptyNodeData;
  content: Array<Text>;
}

export interface Heading6 extends Zone {
  nodeType: ZONES.HEADING_6;
  data: EmptyNodeData;
  content: Array<Text>;
}

export interface Paragraph extends Zone {
  nodeType: ZONES.PARAGRAPH;
  data: EmptyNodeData;
  content: Array<Text>;
}

export interface ListItem extends Zone {
  nodeType: ZONES.LIST_ITEM;
  data: EmptyNodeData;
  content: Zone[];
}

export {};
