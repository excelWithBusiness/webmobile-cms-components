import {styled, css, spacing} from '@excelwithbusiness/webmobile-sc-components';

import {StyledAccordionWrapperProps} from './AccordionSection.types';

export const StyledAccordionWrapper = styled.div<StyledAccordionWrapperProps>`
  margin-top: ${spacing.base.sm};
  ${({theme, textColor}) =>
    textColor &&
    css`
      color: ${theme.color[textColor]};
    `}
`;
