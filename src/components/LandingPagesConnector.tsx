import React from 'react';
import {RouteComponentProps} from 'react-router';
import {DocumentNode, useQuery} from '@apollo/client';
import {ErrorPage} from '@/components/Error';
import {GenericLoadingScreenScrollToTop} from '../../common/components/GenericLoadingScreen/GenericLoadingScreen';

enum ErrorPageType {
  TECHNICAL_ERROR = 'technical-error',
  NOT_FOUND = 'not-found',
  OFFLINE_ERROR = 'offline-error',
}

export type MatchParams = {
  pathname: string;
};

export type LandingConnectedPageProps = RouteComponentProps<MatchParams> & {
  landingPageContent: PageConnectorProps;
  pageId?: string;
};

export type PageConnectorProps = {
  pageId: string | null;
  getLandingPageQuery: DocumentNode;
  children(props: {pageContent: any}): JSX.Element;
};

export type PageProps = RouteComponentProps<MatchParams> & {
  pageContent: any;
  contentConfig: any;
};

export const LandingPagesConnector: React.FC<PageConnectorProps> = ({
  pageId,
  getLandingPageQuery,
  children,
}) => {
  console.log('pageEntryId from LandingPagesConnector', pageId);

  const {loading, data, error} = useQuery<any>(getLandingPageQuery, {
    variables: {id: pageId},
    skip: !pageId,
    fetchPolicy: 'cache-first',
    context: {
      cacheable: true,
      clientName: 'graphcms',
    },
  });

  if (loading) {
    return <GenericLoadingScreenScrollToTop />;
  }

  console.log('data from connector', data);
  /**
   * top-level
   * data.pageContent
   *
   * sub-level-1 - where the page slices are
   * data.pageContent.slices
   *
   * sub-level-2 - where the components are
   * data.pageContent.slices.pageComponents
   *
   */

  if (error) {
    return <ErrorPage errorType={ErrorPageType.TECHNICAL_ERROR} />;
  }

  if (!data || !data.pageContent) {
    return <ErrorPage errorType={ErrorPageType.NOT_FOUND} />;
  }

  const pageContent = data.pageContent;

  return children({pageContent});
};
