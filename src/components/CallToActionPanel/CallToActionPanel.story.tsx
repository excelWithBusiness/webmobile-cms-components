import React from 'react'
import {storiesOf} from '@storybook/react'
import {ImageAndText} from '@excelwithbusiness/webmobile-sc-components'
import Readme from './CallToActionPanel.readme.md'
import {CmsCallToActionPanel} from "./CallToActionPanel";
import {Illustration01} from "@excelwithbusiness/webmobile-svg-library";
import {callToActionPanelMock} from "../../__mocks__";

const callToActionPanelMockLeft = {
  ...callToActionPanelMock,
  data: {
    ...callToActionPanelMock.data,
    callToActionPanel: {
      ...callToActionPanelMock.data.callToActionPanel,
      rightOrientation: false
    }
  }
}

storiesOf('CMS Components/SocialIcon', module)
  .add('Right Orientation', () => {
    return (
      <CmsCallToActionPanel
        content={callToActionPanelMock.data.callToActionPanel}
        image={null}
        svg={<Illustration01/>}
        withLQIP={false}
      />
    )
  })
  .add('Left Orientation', () => {
    return (
      <CmsCallToActionPanel
        content={callToActionPanelMockLeft.data.callToActionPanel}
        image={null}
        svg={<Illustration01/>}
        withLQIP={false}
      />
    )
  })
