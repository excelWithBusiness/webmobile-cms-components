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
  AssetCarouselDefaultProps,
} from '@excelwithbusiness/webmobile-sc-components';
import {useHistory} from 'react-router-dom';

export const StyledToolTip = styled(ToolTip)`
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

export const StaticPlaylist: React.FC<AssetCarouselDefaultProps> = ({
  loading,
  assets,
  playlistType,
  id,
  name,
  title,
  tooltip,
  desktop,
  onSlideChange,
  onBookmarkClick,
  onLockClick,
}): JSX.Element => {
  const history = useHistory();
  return (
    <Row id={id} data-name={name}>
      <Cell columns={12}>
        <ScrollAssetCarousel
          headline={title}
          data-test="landing-page-playlist"
          title={<PlaylistHeader title={title} toolTip={tooltip} name={name} />}
          loading={!assets}
          assets={assets}
          showBookmark={false}
          showLock
          playlistType={playlistType}
          onSlideChange={() => onSlideChange?.({id, name})}
          onlockClick={({asset}) =>
            onLockClick?.(asset.id, !asset.interaction.bookmarked, id)
          }
          onAssetClick={({asset}) =>
            history.push({
              pathname: `/learning-asset/${asset.niceName}?pid_hint=${id}`,
            })
          }
          context={name}
          lazyLoad
          showArrows
          withLQIP
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
};
