import React, { FC } from 'react'
import { CallToActionPanel, Image, Spacer } from '@excelwithbusiness/webmobile-sc-components'
import { CustomSection } from '../CustomSection'
import { CallToActionChild } from './CallToActionChild'

export type SelectableOrientation = 'left' | 'right'

const orientation: { [key in SelectableOrientation]: SelectableOrientation } = {
  right: 'right',
  left: 'left',
}

export type CmsButton = {
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

export interface CmsCallToActionPanel {
  button: CmsButton
  description: string
  heading: string
  image: Image | undefined
  rightOrientation: string
  title: string
}

export interface CmsCallToActionPanelProps {
  content: Partial<CmsCallToActionPanel>
  svg?: JSX.Element
  withLQIP?: boolean
}

export const CmsCallToActionPanel: FC<CmsCallToActionPanelProps> = ({
  content,
  svg,
  withLQIP = false,
}): JSX.Element => {
  const alignment = content?.rightOrientation ? orientation.right : orientation.left

  return (
    <CustomSection>
      <CallToActionPanel
        alignment={alignment}
        image={content?.image ?? undefined}
        svg={svg ?? undefined}
        withLQIP={withLQIP}>
        <CallToActionChild
          heading={content.heading}
          description={content.description}
          button={content.button}
        />
      </CallToActionPanel>
      <Spacer size="md" />
    </CustomSection>
  )
}
