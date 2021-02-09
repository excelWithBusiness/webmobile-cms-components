import React, { FC } from 'react'
import {
  Button,
  CallToActionPanel,
  CopyText,
  Heading,
  Image,
  Spacer,
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

export interface CmsCallToActionPanelProps {
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
  content: CmsCallToActionPanelProps
}

const StyledChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.base.xs};
`

export const CmsCallToActionPanel: FC<CmsCallToActionPanelProps> = ({
  content,
  svg,
  withLQIP = false,
}): JSX.Element => {
  const alignment = content?.rightOrientation ? orientation.right : orientation.left

  return (
    <React.Fragment>
      <CallToActionPanel
        alignment={alignment}
        image={content?.image ?? null}
        svg={!content?.image && svg}
        withLQIP={withLQIP}>
        <StyledChildContainer>
          <Heading scale="level-1" tag="h1" weight="regular" margin="0 0 xxl" textAlign="left">
            {content?.heading}
          </Heading>
          <CopyText tag="div" padding="0" margin="0" color="grey5" display="flex" textAlign="left">
            {content?.description}
          </CopyText>
          {content?.button && (
            <Button actionType="primary" size="md" weight="bold" href={content?.button.link}>
              {content?.button.text}
            </Button>
          )}
        </StyledChildContainer>
      </CallToActionPanel>
      <Spacer size="md" />
    </React.Fragment>
  )
}
