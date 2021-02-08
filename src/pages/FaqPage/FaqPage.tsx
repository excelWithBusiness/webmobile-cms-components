import React from 'react';
import {
  Cell,
  Grid,
  Row,
  Spacer,
} from '@excelwithbusiness/webmobile-sc-components';
import {Main} from './Main/Main';
import {Content} from './Content/Content';
import {FaqPageContentType} from "./FaqPage.types";

export const FaqPage: React.FC<FaqPageContentType> = ({ landingPageContent }) => {
  const {slices} = landingPageContent;
  return (
    <React.Fragment>
      {/* Add this in */}
      {/* <AppMeta key="app-meta-content-special"  /> */}
      <Main slices={slices} />
      <Grid>
        <Row>
          <Cell columns={12}>
            <Spacer size="md" />
            <Content slices={slices} />
          </Cell>
        </Row>
      </Grid>
    </React.Fragment>
  );
};
