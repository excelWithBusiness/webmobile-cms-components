import React from 'react';
import {Cell, Row, ScrollAssetCarousel} from '@excelwithbusiness/webmobile-sc-components';
import {PlaylistHeader} from "./PlaylistHeader";
import {useHistory} from 'react-router-dom';

export const PlaylistSingleSection: React.FC = ({
                                                  loading,
                                                  staticAssets,
                                                  playlistsLoading,
                                                  playlistId,
                                                  playlistName,
                                                  title, tooltip, keyProp, desktop,
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
            onSlideChange?.({playlistId, playlistName})
          }
          onBookmarkClick={({asset}) =>
            bookmarkMutation?.(
              asset.id,
              !asset.interaction.bookmarked,
              playlistId
            )
          }
          onAssetClick={({asset}: { asset: any }) =>
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
