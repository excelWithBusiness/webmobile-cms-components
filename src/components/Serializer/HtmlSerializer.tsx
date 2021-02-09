import React from 'react'
import { RichText } from 'prismic-reactjs'
import { PrismicHtmlSerializer } from './PrismicHtmlSerializer'

export const Serializer = (
  content: any,
  prismicSerializer: React.ReactNode = PrismicHtmlSerializer,
  key?: number | string
) => {
  if (key) {
    return <RichText key={key} render={content} htmlSerializer={prismicSerializer} />
  }
  return <RichText render={content} htmlSerializer={prismicSerializer} />
}
