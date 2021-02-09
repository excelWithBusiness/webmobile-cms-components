import * as React from 'react'
import { StyledCustomSection } from './CustomSection.styled'
import { CustomSectionProps } from './CustomSection.types'

export * from './CustomSection.types'

export const CustomSection: React.FC<CustomSectionProps> = ({
  color = 'transparent',
  id,
  children,
  ...otherProps
}) => {
  return (
    <StyledCustomSection id={id ?? undefined} color={color} {...otherProps}>
      {children}
    </StyledCustomSection>
  )
}
