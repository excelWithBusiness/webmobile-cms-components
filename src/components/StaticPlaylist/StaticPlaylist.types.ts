import {
  BadgeType,
  Competencies,
  SlidesPerPageSettings,
  Interaction,
  Provider,
  Timebox,
  Type,
} from '@excelwithbusiness/webmobile-sc-components'

export type AssetCarouselProps = {
  onAssetClick?: ({
    asset,
    index,
    context,
  }: {
    asset: Asset
    index: number
    context: string
  }) => void
  onSlideChange?: ({ context }: { context: string }) => void
  onInView?: ({ context }: { context: string }) => void
  onBookmarkClick?: ({ asset, context }: { asset: Asset; context: string }) => void
  headline?: string
  dataTest?: string
} & AssetCarouselDefaultProps

export interface AssetCarouselDefaultProps {
  loading: boolean
  promoted?: JSX.Element | boolean
  promotedIndex?: number
  assets: Asset[]
  context: string
  title?: JSX.Element
  tileMargin?: string
  lazyLoad?: boolean
  withLQIP?: boolean
  withNativeLoading?: boolean
  arrows?: boolean
  showBadges?: boolean
  showProvider?: boolean
  playlistType?: 'list' | 'collection'
  withGrid?: boolean
  showArrows?: boolean
  fixedArrowPosition?: boolean
  zeroArrowPosition?: boolean
  tileWidth?: number
  slidesPerPageSettings?: SlidesPerPageSettings
  hideDummies?: boolean
}

export interface CarouselWrapperProps {
  tileMargin: string
}

export interface TileWrapperProps {
  withLabels?: boolean
  hideDummy?: boolean
}

export interface Asset {
  __typename?: string
  provider?: Provider
  interaction?: Interaction
  timebox?: Timebox
  url?: string
  author?: string
  embedVideoURL?: string
  niceName?: string
  coverImage?: string
  creator?: string
  embedVideoLink?: string
  providerId?: number
  screenshotOverride?: string
  name?: string
  type?: Type
  typeId?: number
  duration?: string
  durationType?: string
  published?: string
  sponsored?: boolean
  language?: string
  competencies?: (Competencies | null)[]
  id?: number
  description?: string
  title?: string
  image?: string
  desc?: string
  badges?: (BadgeType | null)[] | null
  restriction?: string
  partOfSession?: string
  takeaway?: string
  saved?: boolean
  useful?: number
  status?: string
  launched?: boolean
  timeSaved?: string
  completed?: boolean
  completedStatus?: string
  notesLastAction?: string
  viewedLastAction?: string
  bookmarkLastAction?: string
  completedLastAction?: string
  notesLastPlaylist?: null
  viewedLastPlaylist?: null
  bookmarkLastPlaylist?: null
  completedLastPlaylist?: null
  lastInteractionPlaylist?: null
}

export interface ResponsiveImageProps {
  src: string
  srcSet?: string
}
