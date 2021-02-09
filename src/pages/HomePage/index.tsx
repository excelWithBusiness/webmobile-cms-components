import React from 'react'
import { HomePage as HomePageWithoutQuery } from './HomePage'
import { HomePageContentType } from './HomePage.types'

export const HomePageWrapper = (props: HomePageContentType) => (
  <HomePageWithoutQuery {...props} landingPageContent={props.landingPageContent} />
)

export * from './HomePage.types'
