import React from 'react'
import { FaqPage as FaqPageWithoutQuery } from './FaqPage'
import { FaqPageContentType } from './FaqPage.types'

export const FaqPageWrapper = (props: FaqPageContentType) => (
  <FaqPageWithoutQuery {...props} landingPageContent={props.landingPageContent} />
)

export * from './FaqPage.types'
