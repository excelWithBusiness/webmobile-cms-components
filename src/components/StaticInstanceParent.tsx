import React, {useContext} from 'react';
import {useLocation, useRouteMatch, withRouter} from 'react-router';
import {head} from '@/utils/FP/FP';
import {CmsContext, GraphCmsInstanceContext} from '@/context/instance';
import {ErrorBoundary} from '@/components/ErrorBoundary';
import {ErrorPage, ErrorPageType} from '@/components/Error';
import {LandingPageWrapper} from './LandingPageWrapper';

export const StaticInstanceParent = ({route}) => {
  const {staticInstance} = useContext<CmsContext>(GraphCmsInstanceContext);
  const history = useLocation();
  const routing = useRouteMatch();

  if (!staticInstance || !staticInstance.instance) {
    return null;
  }

  const slice = head(staticInstance.instance.edges).node;
  const pageSlices = [...slice.staticPages];
  const typeMatcher = type => type.type === route.name;

  const reducePageSlicesToMatchRoute = pageSlices.filter(typeMatcher);
  // @ts-ignore
  const pageEntryId = head(reducePageSlicesToMatchRoute);

  if (!pageEntryId || !pageEntryId.entryId) {
    return <ErrorPage errorType={ErrorPageType.NOT_FOUND} />;
  }

  return (
    <ErrorBoundary>
      <LandingPageWrapper landingPageId={pageEntryId.entryId} />
    </ErrorBoundary>
  );
};

// We need to export default here as it throws an error with the lazy loading
// @ts-ignore
export default withRouter(StaticInstanceParent);
