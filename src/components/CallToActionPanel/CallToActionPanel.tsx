import React, {FC} from 'react'
import {ImageAndText, ImageAndTextProps, styled} from '@excelwithbusiness/webmobile-sc-components'

export type SelectableOrientation = 'left' | 'right'

const orientation: { [key in SelectableOrientation]: SelectableOrientation } = {
  right: 'right',
  left: 'left'
}

type CmsButton = {
  id: string
  text: string
  link?: string | null
  type: string | null
}

type CmsImage = {
  id: string
  url: string
  fileName?: string
  mimeType?: string
  width?: number
  height?: number
  size?: number
  type?: string | null
}

type CallToActionPanel = {
  type: string
  id: string
  button: CmsButton
  description: string
  heading: string
  image: CmsImage
  rightOrientation: string
  title: string
}

export interface CmsCallToActionPanelProps {
  content: CallToActionPanel
} & ImageAndTextProps

const StyledChildContainer = styled.div`
  display: flex;
  flex: 0 1 auto;
  padding: $(({ theme}) => theme.spacing.base.sm)
`

export const CmsCallToActionPanel: FC<CmsCallToActionPanelProps> = ({ content, svg = null, withLQIP = false }): JSX.Element => {
  // use the ID from the Instance to query CallToActionPanel
  const alignment = content?.rightOrientation ? orientation.right : orientation.left;

  return (
    <ImageAndText aligmnent={alignment} image={content?.image.url} svg={svg} withLQIP={withLQIP}>
      <StyledChildContainer>
        <Heading scale="level-1" tag="h1" weight="regular" margin="0" alignText="center">
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

