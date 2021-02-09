import { cleanup } from '@testing-library/react'
import * as React from 'react'
import { LinkSection } from './index'
import { mountWithThemeAndRouter } from 'webmobile-sc-components'

const mockAnchorId = 'linkAnchorId'

describe('Content:Common:Components:LinkSection', () => {
  afterEach(cleanup)

  it('renders section with link and label', () => {
    const label = 'alice'
    const aliceLink = { url: '/alice', __typename: 'Link' }
    const linkSection = mountWithThemeAndRouter(
      <LinkSection link={aliceLink} label={label} anchorId={mockAnchorId} />
    )
    const link = linkSection.find('a').last()
    expect(link.prop('href')).toEqual(aliceLink.url)
    expect(link.text()).toBe(label)
  })

  it('renders section without', () => {
    const label = 'alice'
    const linkSection = mountWithThemeAndRouter(
      <LinkSection link={undefined} label={label} anchorId={mockAnchorId} />
    )
    const link = linkSection.find('a').last()
    expect(link.prop('href')).toEqual('')
    expect(link.text()).toBe(label)
  })
})
