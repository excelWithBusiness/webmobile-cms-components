import {spacing, styled} from 'webmobile-sc-components';

export const StyledTextSection = styled.div<{active?: boolean}>`
  ${({active}) => {
    if (active) {
      return `padding-top: ${spacing.base.md}`;
    }
    return ``;
  }}
`;
