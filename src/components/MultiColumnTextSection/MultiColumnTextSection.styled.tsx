import {spacing, styled} from '@excelwithbusiness/webmobile-sc-components';

export const StyledMultiColumnTextSection = styled.div<{active?: boolean}>`
  ${({active}) => {
    if (active) {
      return `padding-top: ${spacing.base.md}`;
    }
    return ``;
  }}
`;
