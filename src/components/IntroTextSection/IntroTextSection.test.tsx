import { cleanup } from '@testing-library/react'
import * as React from 'react'
import { IntroTextSection } from './'
import { mountWithTheme, CopyText } from 'webmobile-sc-components'

describe('Content:Common:Components:IntroTextSection', () => {
  afterEach(cleanup)

  it('renders section with copytext', () => {
    const myTestContent = 'If you like Pina Coladas, and getting caught in the rain'

    const introTextSection = mountWithTheme(<IntroTextSection introText={myTestContent} />)
    const introText = introTextSection.find(CopyText).first()
    expect(introText.text()).toBe(myTestContent)
  })
})
