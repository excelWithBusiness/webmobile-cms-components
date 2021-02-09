import { cleanup } from '@testing-library/react'
import * as React from 'react'
import { HeadlineSection } from './index'
import { mountWithTheme } from 'webmobile-sc-components'
import { Elements, RichTextBlock } from 'prismic-reactjs'

const mockAnchorId = 'headlineAnchorId'

describe('Content:Common:Components:HeadlineSection', () => {
  afterEach(cleanup)

  it('renders section with heading', () => {
    const aliceHeading: RichTextBlock = {
      spans: [],
      type: Elements.heading1,
      text: 'Alice and bob',
    }
    const headlineSection = mountWithTheme(
      <HeadlineSection headline={[aliceHeading]} anchorId={mockAnchorId} />
    )
    const heading = headlineSection.find('h1').last()
    expect(heading.text()).toBe(aliceHeading.text)
  })
})
