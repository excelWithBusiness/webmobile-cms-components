import {ExtendedThemeColorType} from '@excelwithbusiness/webmobile-cms-landing-pages';
import * as React from 'react';

export enum AccordionSchemaType {
  None = 'none',
  Faq = 'FAQPage',
}

export type AccordionSectionFieldType = {
  entryHeadline: any | null;
  entryContent: any | null;
  anchorId: string | null;
};

export interface AccordionEntryObject {
  details: React.ReactNode;
  title: React.ReactNode;
}

export type AccordionSectionProps = {
  entries: AccordionSectionFieldType[];
  sectionColor?: ExtendedThemeColorType;
  textColor?: ExtendedThemeColorType;
  customAccordionEntries?: AccordionEntryObject[];
  schemaType?: AccordionSchemaType;
};

export type AccordionSectionHeadline = {
  type: string;
  text: string;
};

export type StyledAccordionWrapperProps = {
  textColor?: ExtendedThemeColorType;
};
