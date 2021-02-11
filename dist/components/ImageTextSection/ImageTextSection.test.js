import * as React from 'react';
import { cleanup } from '@testing-library/react';
import { CopyText, Heading, LazyLoadImage, mountWithTheme, ImageAndText } from 'webmobile-sc-components';
import { ImageTextSection } from "./index";
import { RichText } from 'prismic-reactjs';
describe('Content:Common:Components:ImageTextSection', function () {
  afterEach(cleanup);
  var props = {
    titleInternal: 'image and text title',
    image: {
      url: 'testUrl.png'
    },
    imageAlignment: 'right',
    text: [{
      type: 'heading3',
      text: 'This is the Header of ImageTextSection',
      spans: []
    }, {
      type: 'paragraph',
      text: 'This is an ImageAndTextSection',
      spans: []
    }],
    anchorId: 'imageTextAnchorId'
  };
  var imageTextWithoutImage = {
    titleInternal: 'image and text title',
    image: null,
    imageAlignment: 'right',
    text: [{
      type: 'heading3',
      text: 'This is the Header of ImageTextSection',
      spans: []
    }, {
      type: 'paragraph',
      text: 'This is an ImageAndTextSection',
      spans: []
    }],
    anchorId: 'imageTextAnchorId'
  };
  it('renders section with image', function () {
    var imageAndTextSection = mountWithTheme(React.createElement(ImageTextSection, {
      imageAndTextFields: [props]
    }));
    var image = imageAndTextSection.find(LazyLoadImage).first();
    expect(image.props().src).toBe(props.image.url);
  });
  it('renders section with header and paragraph', function () {
    var imageAndTextSection = mountWithTheme(React.createElement(ImageTextSection, {
      imageAndTextFields: [props]
    }));
    var header = imageAndTextSection.find(Heading).first();
    var paragraph = imageAndTextSection.find(CopyText).first();
    expect(header.text()).toBe(props.text[0].text);
    expect(paragraph.text()).toBe(props.text[1].text);
  });
  it('renders section without image', function () {
    var imageAndTextSection = mountWithTheme(React.createElement(ImageTextSection, {
      imageAndTextFields: [imageTextWithoutImage]
    }));
    expect(imageAndTextSection.find(ImageAndText)).toHaveLength(0);
    expect(imageAndTextSection.find(RichText)).toHaveLength(1);
  });
});
//# sourceMappingURL=ImageTextSection.test.js.map