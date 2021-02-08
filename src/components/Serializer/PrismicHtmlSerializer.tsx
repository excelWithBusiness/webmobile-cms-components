import React from 'react'
import { Elements, HTMLSerializer } from 'prismic-reactjs'
import { CopyText, Link, Lists, Heading } from 'webmobile-sc-components'

export const PrismicHtmlSerializer: HTMLSerializer<React.ReactNode> = (
  type: string,
  element: any,
  content: any,
  children: React.ReactNode,
  key: string
) => {
  switch (type) {
    case Elements.heading1:
      return (
        <Heading tag="h1" scale="level-1" margin="0 0 lg 0" fontFamily="branded" key={key}>
          {children}
        </Heading>
      )
    case Elements.heading2:
      return (
        <Heading tag="h2" scale="level-2" margin="0 0 lg 0" bold key={key}>
          {children}
        </Heading>
      )
    case Elements.heading3:
      return (
        <Heading tag="h3" scale="level-3" margin="0 0 md 0" bold key={key}>
          {children}
        </Heading>
      )
    case Elements.heading4:
      return (
        <Heading tag="h4" scale="level-4" margin="0 0 sm 0" key={key}>
          {children}
        </Heading>
      )
    case Elements.heading5:
      return (
        <Heading
          tag="h4"
          fontFamily="branded"
          color="primary"
          margin="0 0 sm 0"
          fontSize="xl"
          scale="level-4"
          key={key}>
          {children}
        </Heading>
      )
    case Elements.heading6:
      return (
        <Heading
          tag="h4"
          fontFamily="branded"
          color="primary"
          margin="0 0 sm 0"
          fontSize="xl"
          scale="level-4"
          key={key}>
          {children}
        </Heading>
      )

    case Elements.paragraph:
      return (
        <CopyText fontSize="sm" tag="p" withMargins key={key}>
          {children}
        </CopyText>
      )

    case Elements.oList:
      return (
        <Lists ordered withMargin key={key}>
          {children}
        </Lists>
      )

    case Elements.list:
      return (
        <Lists withMargin key={key}>
          {children}
        </Lists>
      )

    // Elements.listItem, Elements.oListItem are rendered as plain <li> nodes

    case Elements.hyperlink: {
      // only external links are supported
      if (element.data.url) {
        return (
          <Link href={element.data.url} fontSize="sm" inline key={key}>
            {children}
          </Link>
        )
      } else {
        return children
      }
    }

    default:
      return null
  }
}
