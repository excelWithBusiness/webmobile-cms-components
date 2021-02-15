import * as React from 'react';
import {
  Picture,
  CopyText,
  Heading,
  Link,
  Typo,
} from '@excelwithbusiness/webmobile-sc-components';
import {defaultInlineUpdated, documentToReactComponents} from '../../helpers';
import {BLOCKS, INLINES, MARKS} from '../../types';

interface SerializerCustomProps {
  bold?: boolean;
  color?: string;
  textColor?: string;
  primaryColor?: string;
  fontSize?: string;
  withMargins?: boolean;
  inline?: boolean;
}

export const ConfigurableContentfulHtmlSerializer = (
  customProps: SerializerCustomProps = {}
) => (render: Document) => {
  const serialize = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => (
        <CopyText tag="strong" bold={!!customProps.bold}>
          {text}
        </CopyText>
      ),
      [MARKS.ITALIC]: (text: any) => (
        <CopyText tag="em" bold={!!customProps.bold}>
          {text}
        </CopyText>
      ),
      [MARKS.UNDERLINE]: text => (
        <CopyText tag="u" bold={!!customProps.bold}>
          {text}
        </CopyText>
      ),
      [MARKS.CODE]: text => (
        <CopyText tag="code" bold={!!customProps.bold}>
          {text}
        </CopyText>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any) => {
        console.info('custom', customProps);
        return (
          <Heading tag="h1" scale="level-1" bold={!!customProps.bold}>
            {children}
          </Heading>
        );
      },
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <Heading tag="h2" scale="level-2" bold={!!customProps.bold}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <Heading
          tag="h3"
          scale="level-3"
          margin="lg 0"
          fontFamily="Nunito Sans"
          bold={!!customProps.bold}
        >
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: any) => (
        <Heading tag="h4" scale="level-4" bold={!!customProps.bold}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: any) => (
        <Heading tag="h5" scale="level-4" bold={!!customProps.bold}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: any) => (
        <Heading tag="h6" scale="level-4" bold={!!customProps.bold}>
          {children}
        </Heading>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <CopyText
          color={customProps.color}
          fontSize={customProps.fontSize}
          withMargins={customProps.withMargins !== false}
        >
          {children}
        </CopyText>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => (
        <Picture
          src={node.src}
          alt={node.alt}
          width={node.width}
          height={node.height}
        />
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <Typo tag="ul">{children}</Typo>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <Typo tag="ol">{children}</Typo>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <Typo tag="li">{children}</Typo>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        console.log('======== node from link ========', node);
        return (
          <Link
            href={node.href}
            title={node.title}
            underline
            inline={Boolean(customProps.inline)}
            target={node.openInNewTab ? '_blank' : '_self'}
          >
            {children}
          </Link>
        );
      },
    },
    renderText: (text: string) => {
      console.info('rendering text', text);
      return text
        .split('\n')
        .reduce((children: any, textSegment: any, index: number) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    },
  };

  return documentToReactComponents(render, serialize);
};
