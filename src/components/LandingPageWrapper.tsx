import React from 'react';
import {
  LandingPagesConnector,
  LandingConnectedPageProps,
} from './LandingPagesConnector';
import {getLandingPageQuery} from '../graphql';
import {LandingPageRoutes} from '../LandingPageRoutes';

export const LandingPageWrapper = ({landingPageId}): JSX.Element => (
  <LandingPagesConnector
    pageId={landingPageId}
    getLandingPageQuery={getLandingPageQuery}
  >
    {({pageContent}) => <LandingPageRoutes landingPageContent={pageContent} />}
  </LandingPagesConnector>
);
