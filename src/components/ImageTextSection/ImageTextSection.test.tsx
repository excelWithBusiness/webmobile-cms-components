import * as React from 'react';
import {cleanup} from '@testing-library/react';
import {ImageAndTextSectionField} from './ImageTextSection.types';
import {
  CopyText,
  Heading,
  LazyLoadImage,
  mountWithTheme,
  ImageAndText,
} from 'webmobile-sc-components';
import {ImageTextSection} from './index';
import {RichText} from 'prismic-reactjs';

describe('Landing:Components:ImageTextSection', () => {
  afterEach(cleanup);
  const props: ImageAndTextSectionField = {
    titleInternal: 'image and text title',
    image: {
      url: 'testUrl.png',
    },
    imageAlignment: 'right',
    text: [
      {
        type: 'heading3',
        text: 'This is the Header of ImageTextSection',
        spans: [],
      },
      {
        type: 'paragraph',
        text: 'This is an ImageAndTextSection',
        spans: [],
      },
    ],
    anchorId: 'imageTextAnchorId',
  };

  const imageTextWithoutImage: ImageAndTextSectionField = {
    titleInternal: 'image and text title',
    image: null,
    imageAlignment: 'right',
    text: [
      {
        type: 'heading3',
        text: 'This is the Header of ImageTextSection',
        spans: [],
      },
      {
        type: 'paragraph',
        text: 'This is an ImageAndTextSection',
        spans: [],
      },
    ],
    anchorId: 'imageTextAnchorId',
  };

  it('renders section with image', () => {
    const imageAndTextSection = mountWithTheme(
      <ImageTextSection imageAndTextFields={[props]} />
    );
    const image = imageAndTextSection.find(LazyLoadImage).first();
    expect(image.props().src).toBe(props.image.url);
  });

  it('renders section with header and paragraph', () => {
    const imageAndTextSection = mountWithTheme(
      <ImageTextSection imageAndTextFields={[props]} />
    );
    const header = imageAndTextSection.find(Heading).first();
    const paragraph = imageAndTextSection.find(CopyText).first();
    expect(header.text()).toBe(props.text[0].text);
    expect(paragraph.text()).toBe(props.text[1].text);
  });

  it('renders section without image', () => {
    const imageAndTextSection = mountWithTheme(
      <ImageTextSection imageAndTextFields={[imageTextWithoutImage]} />
    );

    expect(imageAndTextSection.find(ImageAndText)).toHaveLength(0);
    expect(imageAndTextSection.find(RichText)).toHaveLength(1);
  });
});
