import { ExtendedThemeColorType } from '../../themes'

export type GroupRichTextFieldType = {
  textField: any | null
  title: any | null
}

export interface GroupRichTextSectionProps {
  fields: GroupRichTextFieldType[]
  sectionColor: ExtendedThemeColorType
  anchorId: string | null
}
