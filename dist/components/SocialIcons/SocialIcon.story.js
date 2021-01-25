import React from 'react';
import { storiesOf } from '@storybook/react';
import { SocialFacebook, SocialTwitter, SocialYouTube, SocialInstagram } from '@excelwithbusiness/webmobile-svg-library';
import { FlexBox, Icon as SocialIcon } from '@excelwithbusiness/webmobile-sc-components';
storiesOf('CMS Components/SocialIcon', module).add('Facebook', function () {
  return React.createElement(FlexBox, null, React.createElement(SocialIcon, {
    width: 40,
    height: 40,
    color: "black"
  }, React.createElement(SocialFacebook, null)));
}).add('Twitter', function () {
  return React.createElement(FlexBox, null, React.createElement(SocialIcon, {
    width: 40,
    height: 40,
    color: "black"
  }, React.createElement(SocialTwitter, null)));
}).add('Instagram', function () {
  return React.createElement(FlexBox, null, React.createElement(SocialIcon, {
    width: 40,
    height: 40,
    color: "black"
  }, React.createElement(SocialInstagram, null)));
}).add('YouTube', function () {
  return React.createElement(FlexBox, null, React.createElement(SocialIcon, {
    width: 40,
    height: 40,
    color: "black"
  }, React.createElement(SocialYouTube, null)));
});
//# sourceMappingURL=SocialIcon.story.js.map