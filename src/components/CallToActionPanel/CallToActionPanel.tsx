import React, { FC } from 'react'
import {
  Button,
  CopyText,
  Heading,
  Image,
  ImageAndText,
  ImageAndTextProps,
  styled,
} from '@excelwithbusiness/webmobile-sc-components'

export type SelectableOrientation = 'left' | 'right'

const orientation: { [key in SelectableOrientation]: SelectableOrientation } = {
  right: 'right',
  left: 'left',
}

type CmsButton = {
  id: string
  text: string
  link?: string | undefined
  type: string | undefined
}

export interface CmsImage {
  id: string
  url: string
  alt?: string
  fileName?: string
  mimeType?: string
  width?: number
  height?: number
  size?: number
  type?: string | undefined
}

type CallToActionPanel = {
  type: string
  id: string
  button: CmsButton
  description: string
  heading: string
  image: Image | undefined
  rightOrientation: string
  title: string
}

export interface CmsCallToActionPanelProps extends ImageAndTextProps {
  content: CallToActionPanel
}

const StyledChildContainer = styled.div`
  display: flex;
  flex: 0 1 auto;
  padding: ${({ theme }) => theme.spacing.base.md};
`

export const CmsCallToActionPanel: FC<CmsCallToActionPanelProps> = ({
  content,
  svg,
  withLQIP = false,
}): JSX.Element => {
  // use the ID from the Instance to query CallToActionPanel
  const alignment = content?.rightOrientation ? orientation.right : orientation.left

  return (
    <ImageAndText alignment={alignment} image={content?.image} svg={svg} withLQIP={withLQIP}>
      <StyledChildContainer>
        <Heading scale="level-1" tag="h1" weight="regular" margin="0">
          {content?.heading}
        </Heading>
        <CopyText tag="p" padding="md 0" margin="0 md" color="grey5" display="flex">
          {content?.description}
        </CopyText>
        <Button actionType="primary" size="md" weight="bold" href={content?.button.link}>
          {content?.button.text}
        </Button>
      </StyledChildContainer>
    </ImageAndText>
  )
}
