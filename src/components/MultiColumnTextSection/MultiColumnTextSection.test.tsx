import { cleanup } from '@testing-library/react'
import * as React from 'react'
import { MultiColumnTextSection } from './index'
import { mountWithTheme } from '@excelwithbusiness/webmobile-sc-components'
import { Elements, RichTextBlock } from '../../types/graphcms-richtext'

const mockAnchorId = 'richTextAnchorId'

describe('Landing:Components:MultiColumnTextSection', () => {
  afterEach(cleanup)

  it('renders section with link and label', () => {
    const aliceRichText: RichTextBlock = {
      type: Elements.paragraph,
      children: [
        {
          text: 'Alice and bob',
        },
      ],
    }
    const textSection = mountWithTheme(
      <MultiColumnTextSection richTextEntries={[aliceRichText]} anchorId={mockAnchorId} />
    )
    const paragrpah = textSection.find('p').last()
    expect(paragrpah.text()).toBe(aliceRichText.children[0].text)
  })
})
