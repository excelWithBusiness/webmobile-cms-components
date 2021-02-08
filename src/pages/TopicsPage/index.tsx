import React from 'react'
import { TopicsPage as TopicsPageWithoutQuery } from './TopicsPage'
import {TopicsPageContentType} from './TopicsPage.types'

export const TopicsPageWrapper = (props: TopicsPageContentType) => (
  <TopicsPageWithoutQuery {...props} landingPageContent={props.landingPageContent} />
)

export * from './TopicsPage.types'
