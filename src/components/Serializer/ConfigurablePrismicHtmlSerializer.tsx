import * as React from 'react'
import { Elements, HTMLSerializer } from 'prismic-reactjs'
import { Picture, CopyText, Heading, Link, Typo } from 'webmobile-sc-components'

export type SerializerCustomProps = {
  [key: string]: boolean | string | null | number | undefined
}

export type Serializer<T> = (customProps?: SerializerCustomProps) => HTMLSerializer<T>

export const ConfigurablePrismicHtmlSerializer: Serializer<React.ReactNode> = (
  customProps = {}
) => (type, element, text, children, index) => {
  switch (type) {
    case Elements.heading1:
      return (
        <Heading key={index} tag="h1" scale="level-1" bold={!!customProps.bold}>
          {children}
        </Heading>
      )
    case Elements.heading2:
      return (
        <Heading key={index} tag="h2" scale="level-2" bold={!!customProps.bold}>
          {children}
        </Heading>
      )
    case Elements.heading3:
      return (
        <Heading key={index} tag="h3" scale="level-3" bold={!!customProps.bold}>
          {children}
        </Heading>
      )
    case Elements.heading4:
      return (
        <Heading key={index} tag="h4" scale="level-4" bold={!!customProps.bold}>
          {children}
        </Heading>
      )
    case Elements.heading5:
      return (
        <Heading key={index} tag="h5" scale="level-4" bold={!!customProps.bold}>
          {children}
        </Heading>
      )
    case Elements.heading6:
      return (
        <Heading key={index} tag="h6" scale="level-4" bold={!!customProps.bold}>
          {children}
        </Heading>
      )
    case Elements.paragraph:
      return (
        <CopyText
          color={customProps.color}
          fontSize={customProps.fontSize}
          withMargins={customProps.withMargins !== false}
          key={index}>
          {children}
        </CopyText>
      )
    case Elements.strong:
      return (
        <CopyText tag="strong" key={index} bold={!!customProps.bold}>
          {children}
        </CopyText>
      )
    case Elements.em:
      return (
        <CopyText tag="em" key={index}>
          {children}
        </CopyText>
      )
    case Elements.oListItem:
    case Elements.listItem:
      return (
        <Typo tag="li" key={index}>
          {children}
        </Typo>
      )
    case Elements.list:
      return (
        <Typo tag="ul" key={index}>
          {children}
        </Typo>
      )
    case Elements.oList:
      return (
        <Typo tag="ol" key={index}>
          {children}
        </Typo>
      )
    case Elements.image:
      return (
        <Picture
          src={element.url}
          alt={element.alt}
          width={element.dimensions.width}
          height={element.dimensions.height}
        />
      )
    case Elements.hyperlink:
        // only external links are supported
        if (element.data.url) {
          return (
            <Link
              href={element.data.url}
              underline
              inline={Boolean(customProps.inline)}
              key={index}
              target={element?.data?.target || '_self'}>
              {children}
            </Link>
          )
        }
      break
    default:
      return null
  }
}
