import * as React from 'react';
import {
  ImageTextSectionProps,
  ImageAndTextSectionField,
} from './ImageTextSection.types';
import {
  Grid,
  Row,
  Offset,
  Cell,
  ImageAndText,
  ImageAlignment,
} from 'webmobile-sc-components';
import {CustomSection} from '../CustomSection';
import {Serializer} from '../Serializer/HtmlSerializer';
import {ConfigurableContentfulHtmlSerializer} from '../Serializer/ConfigurableContentfulHtmlSerializer';

export * from './ImageTextSection.types';

export const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  imageAndTextFields,
  textColor,
  sectionColor,
  primaryColor,
}) => {
  const renderImageAndText = (
    imageAndTextEntry: ImageAndTextSectionField,
    index: number
  ) => {
    const {image, text, imageAlignment, anchorId} = imageAndTextEntry;
    return (
      <CustomSection color={sectionColor} key={index} id={anchorId}>
        <Grid>
          <Row noMargin>
            <Offset colsXl={1} colsLg={1} colsMd={1} colsSm={1} colsXs={0} />
            <Cell colsXl={10} colsLg={10} colsMd={6} colsSm={6} colsXs={4}>
              {image ? (
                <ImageAndText
                  image={image?.desktop ? image?.desktop : image}
                  imageAlignment={imageAlignment as ImageAlignment}
                >
                  {text &&
                    Serializer(
                      text,
                      ConfigurableContentfulHtmlSerializer({
                        color: sectionColor,
                      })
                    )}
                </ImageAndText>
              ) : (
                text &&
                Serializer(
                  text,
                  ConfigurableContentfulHtmlSerializer({
                    color: sectionColor,
                  })
                )
              )}
            </Cell>
          </Row>
        </Grid>
      </CustomSection>
    );
  };

  return (
    <React.Fragment>
      {imageAndTextFields.map((field, index) => {
        renderImageAndText(field, index);
      })}
    </React.Fragment>
  );
};
