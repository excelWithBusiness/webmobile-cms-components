import React from 'react';
import {ContentfulHtmlSerializer} from './ContentfulHtmlSerializer';

// @ts-ignore
export const Serializer = (
  children: any,
  contentfulSerializer: any = ContentfulHtmlSerializer,
  key?: number | string
) => {
  console.log('------ Serializer children -------', children);

  const contentfulContent = children
    ? Array.isArray(children) && children.length === 1 && children[0]
      ? children[0].children
      : children
    : null;

  return contentfulSerializer(children);
};
