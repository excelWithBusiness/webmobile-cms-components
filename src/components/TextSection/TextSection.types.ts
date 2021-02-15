import {RichTextBlock} from 'prismic-reactjs';
import {ExtendedThemeColorType} from '@excelwithbusiness/webmobile-cms-landing-pages';

export type TextSectionProps = {
  richText: any[];
  sectionColor?: ExtendedThemeColorType;
  active?: boolean;
  anchorId?: string | null;
  textColor?: ExtendedThemeColorType;
  primaryColor?: ExtendedThemeColorType;
};

export type FootnotesSectionType = {
  type: string | null;
  footnotesText: any | null;
  anchorId: string | null;
};
