## How to use?
Import the `Icon` component and also import the SVG you want to use directly from the `@/svgs` module and nest it. The `Icon` component itself has the Prop `rotate` to allow a rotation of a SVG.

```javascript
import { Icon } from '@/components/Atoms/Icon'
import { IconArrow } from '@/svgs'

<Icon>
  <IconArrow />
</Icon>

<Icon rotate={90}> 
  <IconArrow />
</Icon>
```

  &nbsp;

## List of existing Icons

```js

SvgAdd

SvgArticle

SvgBackUi

SvgBookmark

SvgBookmarkActive

SvgCheckmarkCircle

SvgCheckmarkCircleOutlined

SvgCheckmarkSquare

SvgCheckmarkSquareOutlined

SvgClear

SvgClearCircle

SvgClearCircleOutlined

SvgClearSquare

SvgClearSquareOutlined

SvgCross

SvgDone

SvgFastForward

SvgFastRewind

SvgFilter

SvgForward

SvgHeart

SvgHeartOutlined

SvgHelp

SvgHelpOutlined

SvgInfo

SvgInfoOutined

SvgMenuIcon

SvgNext

SvgPause

SvgPlay

SvgPlayOutlined

SvgSearch

SvgSettings

SvgSettingsOutlined

SvgSkip

SvgSkipNext

SvgSkipPrevious

SvgVolumeDown

SvgVolumeLow

SvgVolumeMinus

SvgVolumeMute

SvgVolumeOff

SvgVolumePlus

SvgVolumeUp

```
