import React, { FC } from 'react'
import { Button, CopyText, Heading, styled } from '@excelwithbusiness/webmobile-sc-components'
import { CmsButton } from './CallToActionPanel'

export interface CallToActionChildProps {
  button: CmsButton | undefined
  description: string | undefined
  heading: string | undefined
}

const StyledChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.base.xs};
`

export const CallToActionChild: FC<CallToActionChildProps> = ({
  heading,
  description,
  button,
}): JSX.Element => {
  return (
    <StyledChildContainer>
      {heading && (
        <Heading scale="level-1" tag="h1" weight="regular" margin="0 0 xxl" textAlign="left">
          {heading}
        </Heading>
      )}
      {description && (
        <CopyText tag="div" padding="0" margin="0" color="grey5" display="flex" textAlign="left">
          {description}
        </CopyText>
      )}
      {button && (
        <Button actionType="primary" size="md" weight="bold" href={button.link}>
          {button.text}
        </Button>
      )}
    </StyledChildContainer>
  )
}
