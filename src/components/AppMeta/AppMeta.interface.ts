export interface AdditionalMeta {
  name?: string
  content: string
  property?: string
  [key: string]: string | undefined
}

export interface AppMetaProps {
  title?: string | null
  description?: string | null
  generator?: string
  keywords?: string[]
  canonical?: string
  imageUrl?: string
  prev?: string
  next?: string
  type?: string
  fontList?: string[]
  preconnectLinkList?: string[]
  prefetchLinkList?: string[]
  additionalMetas?: AdditionalMeta[]
  includeProductInTitle?: boolean
  productName?: string
}
