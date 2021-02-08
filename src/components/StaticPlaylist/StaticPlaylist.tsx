import React from 'react';
import {
  Cell,
  CopyText,
  Heading,
  Icon,
  IconInfoOutlined,
  Row,
  ScrollAssetCarousel,
  styled,
  ToolTip,
} from 'webmobile-sc-components';
import {PlaylistHeader} from "./PlaylistHeader";
import {useHistory} from 'react-router-dom';

export const StyledToolTip = styled(ToolTip)
  `
    z-index: 10;
  `;

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
        <IconInfoOutlined/>
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


export const StaticPlaylist: React.FC = ({
          loading,
          staticAssets,
          playlistsLoading,
          playlistId,
          playlistName, title, tooltip, keyProp, desktop,
          onSlideChange,
          bookmarkMutation,
        }): JSX.Element => {
  const history = useHistory()
  return (
    <Row id={playlistId} key={keyProp} data-name={playlistName}>
      <Cell columns={12}>
        <ScrollAssetCarousel
          title={<PlaylistHeader title={title} toolTip={tooltip} name={playlistName}/>}
          loading={loading}
          fixedArrowPositions
          assets={staticAssets}
          onSlideChange={() =>
            onSlideChange?.({playlistId, playlistName, playlistIndex: index})
          }
          onBookmarkClick={({asset}) =>
            bookmarkMutation?.(
              asset.id,
              !asset.interaction.bookmarked,
              playlistId
            )
          }
          onAssetClick={({asset}) =>
            history.push({
              pathname: `/learning-asset/${asset.niceName}?pid_hint=${playlistId}`,
            })
          }
          context={playlistName}
          lazyLoad
          showArrows
          tileMargin="md"
          slidesPerPageSettings={{
            desktop,
            mobileBig: 1,
            mobileSmall: 1,
            tablet: 3,
          }}
        />
      </Cell>
    </Row>
  );
}
