import { RichTextBlock } from 'prismic-reactjs'

export type FaqEntryType = {
  question: any | null
  answer: any
  anchorId: string | null
}

export type FAQSectionProps = {
  entries: FaqEntryType[]
  headline?: RichTextBlock[]
}
