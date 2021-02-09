import { CustomSectionProps } from './CustomSection.types'
import { styled, Section } from 'webmobile-sc-components'

export const StyledCustomSection = styled(Section)<CustomSectionProps>`
  background-color: ${({ color, theme }) => color && theme.color[color]};
`
