import { SectionProps } from 'webmobile-sc-components'

export type CustomSectionProps = {
  children: React.ReactNode
  id?: string | null
} & Partial<SectionProps>
