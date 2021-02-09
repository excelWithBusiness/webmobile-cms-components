import { RichTextBlock } from 'prismic-reactjs'
import { ExtendedThemeColorType } from '../../themes'

export type HeadlineSectionProps = {
  headline: RichTextBlock[]
  anchorId?: string | null
  textColor?: ExtendedThemeColorType
  sectionColor?: ExtendedThemeColorType
}
