import { cleanup } from '@testing-library/react'
import * as React from 'react'
import { GroupRichTextSection } from './index'
import { mountWithTheme, Typo } from 'webmobile-sc-components'
import { GroupRichTextFieldType } from './GroupRichTextSection.types'

const mockAnchorId = 'groupTextAnchorId'

describe('Content:Common:Components:GroupRichTextSection', () => {
  afterEach(cleanup)

  it('renders section with group richtext', () => {
    const groupText: GroupRichTextFieldType[] = [
      {
        textField: [
          {
            text: 'TextField1',
            type: 'paragraph',
            spans: [],
          },
          {
            text: 'TextField2',
            type: 'paragraph',
            spans: [],
          },
        ],
        title: [
          {
            text: 'Title1',
            type: 'heading1',
            spans: [],
          },
          {
            text: 'title2',
            type: 'heading2',
            spans: [],
          },
        ],
      },
    ]
    const sectionColor = 'grey1'

    const renderCardSection = mountWithTheme(
      <GroupRichTextSection
        fields={groupText}
        sectionColor={sectionColor}
        anchorId={mockAnchorId}
      />
    )

    const heading = renderCardSection.find('h1').last()
    expect(heading.text()).toBe(groupText[0].title[0].text)

    const paragraph = renderCardSection.find(Typo).last()
    expect(paragraph.text()).toBe(groupText[0].textField[1].text)
  })
})
