import { ExtendedThemeColorType } from '../../themes'
import { RichTextBlock } from '../../types/graphcms-richtext'

export type MultiColumnTextSectionSectionProps = {
  richTextEntries: RichTextBlock[]
  sectionColor?: ExtendedThemeColorType
  active?: boolean
  anchorId?: string | null
  textColor?: ExtendedThemeColorType
  primaryColor?: ExtendedThemeColorType
}
