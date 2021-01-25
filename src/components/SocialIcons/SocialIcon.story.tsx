import React from 'react'
import { storiesOf } from '@storybook/react'
import { SocialFacebook, SocialTwitter, SocialYouTube, SocialInstagram } from '@excelwithbusiness/webmobile-svg-library'
import { FlexBox, Icon as SocialIcon } from '@excelwithbusiness/webmobile-sc-components'
import Readme from './SocialIcon.readme.md'

storiesOf('CMS Components/SocialIcon', module)
  .add('Facebook', () => {
    return (
      <FlexBox>
        <SocialIcon width={40} height={40} color="black">
          <SocialFacebook />
        </SocialIcon>
      </FlexBox>
    )
  })
  .add('Twitter', () => {
    return (
      <FlexBox>
        <SocialIcon width={40} height={40} color="black">
          <SocialTwitter />
        </SocialIcon>
      </FlexBox>
    )
  })
  .add('Instagram', () => {
    return (
      <FlexBox>
        <SocialIcon width={40} height={40} color="black">
          <SocialInstagram />
        </SocialIcon>
      </FlexBox>
    )
  })
  .add('YouTube', () => {
    return (
      <FlexBox>
        <SocialIcon width={40} height={40} color="black">
          <SocialYouTube />
        </SocialIcon>
      </FlexBox>
    )
  })
