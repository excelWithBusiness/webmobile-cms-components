import React from 'react'
import { WhoWeArePage as TopicsPageWithoutQuery } from './WhoWeArePage'
import { TopicsPageContentType } from './WhoWeArePage.types'

export const TopicsPageWrapper = (props: TopicsPageContentType) => (
  <TopicsPageWithoutQuery {...props} landingPageContent={props.landingPageContent} />
)

export * from './WhoWeArePage.types'
