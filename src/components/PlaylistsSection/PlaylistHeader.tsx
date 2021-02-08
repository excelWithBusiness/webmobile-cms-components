import React from 'react';
import {
  Heading,
  CopyText,
  Icon,
  ToolTip,
  styled,
  css,
  IconInfoOutlined,
} from 'webmobile-sc-components';

export const StyledToolTip = styled(ToolTip)(
  () =>
    css`
      z-index: 10;
    `
);

/**
 * @description Playlist Title Component
 * @param {String} sectionTitle
 * @param {String} sectionToolTip
 * @param {String} playlistName
 */
export const PlaylistHeader = ({title, toolTip, name}) => (
  <>
    <CopyText
      limitLines={1}
      fontSize="sm"
      as="div"
      display="inline-flex"
      margin="0 sm xs 0"
    >
      {title}
    </CopyText>
    <StyledToolTip content={toolTip}>
      <Icon width="8px" height="8px">
        <IconInfoOutlined />
      </Icon>
    </StyledToolTip>
    <Heading
      color="primary"
      scale="level-2"
      tag="h2"
      lineHeight="sm"
      fontFamily="default"
      weight="semibold"
    >
      {name}
    </Heading>
  </>
);
