import * as React from 'react'
import { RichText } from 'prismic-reactjs'
import { CopyText, Heading, Link, Picture, mountWithTheme } from 'webmobile-sc-components'
import {
  getHeadline,
  getParagraph,
  getStrongParagraph,
  getEmParagraph,
  getUrlParagraph,
  getImage,
} from './RichTextHtmlSerializer.mock'

import { ConfigurablePrismicHtmlSerializer } from './ConfigurablePrismicHtmlSerializer'

const renderWrapper = (richTextList = []) => {
  return mountWithTheme(
    <RichText render={richTextList} htmlSerializer={ConfigurablePrismicHtmlSerializer()} />
  )
}

describe('RichText with Serializer', () => {
  it('renders h1 element correctly', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    const wrapper = renderWrapper([getHeadline('1')])
    expect(wrapper.find(Heading)).toHaveLength(1)
    expect(wrapper.find(Heading).prop('tag')).toEqual('h1')
    expect(wrapper.find(Heading).prop('scale')).toEqual('level-1')
  })

  it('renders h2 element correctly', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    const wrapper = renderWrapper([getHeadline('2')])
    expect(wrapper.find(Heading)).toHaveLength(1)
    expect(wrapper.find(Heading).prop('tag')).toEqual('h2')
    expect(wrapper.find(Heading).prop('scale')).toEqual('level-2')
  })

  it('renders h3 element correctly', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    const wrapper = renderWrapper([getHeadline('3')])
    expect(wrapper.find(Heading)).toHaveLength(1)
    expect(wrapper.find(Heading).prop('tag')).toEqual('h3')
    expect(wrapper.find(Heading).prop('scale')).toEqual('level-3')
  })

  it('renders h4 element correctly', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    const wrapper = renderWrapper([getHeadline('4')])
    expect(wrapper.find(Heading)).toHaveLength(1)
    expect(wrapper.find(Heading).prop('tag')).toEqual('h4')
    expect(wrapper.find(Heading).prop('scale')).toEqual('level-4')
  })

  it('renders h5 element correctly', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    const wrapper = renderWrapper([getHeadline('5')])
    expect(wrapper.find(Heading)).toHaveLength(1)
    expect(wrapper.find(Heading).prop('tag')).toEqual('h5')
    expect(wrapper.find(Heading).prop('scale')).toEqual('level-4')
  })

  it('renders h6 element correctly', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    const wrapper = renderWrapper([getHeadline('6')])
    expect(wrapper.find(Heading)).toHaveLength(1)
    expect(wrapper.find(Heading).prop('tag')).toEqual('h6')
    expect(wrapper.find(Heading).prop('scale')).toEqual('level-4')
  })

  it('renders p element correctly', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    const wrapper = renderWrapper([getParagraph()])
    expect(wrapper.find(CopyText)).toHaveLength(1)
  })

  it('renders strong element correctly', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    const wrapper = renderWrapper([getStrongParagraph()])
    expect(wrapper.find(CopyText)).toHaveLength(2)
    // Check outer paragraph
    expect(
      wrapper
        .find(CopyText)
        .at(0)
        .prop('withMargins')
    ).toBeTruthy()
    // Check inner strong paragraph
    expect(
      wrapper
        .find(CopyText)
        .at(1)
        .prop('withMargins')
    ).toBeFalsy()
    expect(
      wrapper
        .find(CopyText)
        .at(1)
        .prop('tag')
    ).toEqual('strong')
  })

  it('renders em element correctly', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    const wrapper = renderWrapper([getEmParagraph()])
    expect(wrapper.find(CopyText)).toHaveLength(2)
    // Check outer paragraph
    expect(
      wrapper
        .find(CopyText)
        .at(0)
        .prop('withMargins')
    ).toBeTruthy()
    // Check inner em paragraph
    expect(
      wrapper
        .find(CopyText)
        .at(1)
        .prop('withMargins')
    ).toBeFalsy()
    expect(
      wrapper
        .find(CopyText)
        .at(1)
        .prop('tag')
    ).toEqual('em')
  })

  it('renders urls correctly', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    const wrapper = renderWrapper([getUrlParagraph()])
    expect(wrapper.find(Link)).toHaveLength(1)
    expect(wrapper.find(Link).prop('underline')).toBeTruthy()
    expect(wrapper.find(Link).prop('href')).toEqual('https://mediamarkt.de')
  })

  it('renders images correctly', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
    const wrapper = renderWrapper([getImage()])
    expect(wrapper.find(Picture)).toHaveLength(1)
    expect(
      wrapper
        .find(Picture)
        .find('img')
        .prop('src')
    ).toEqual(
      'https://mms-test.cdn.prismic.io/mms-test/' +
        'df94ace81ca3fe53fde90434b330541257cbc9c9_myaccount-retention-2018-deine-nacht-in-mm.jpg'
    )
    expect(
      wrapper
        .find(Picture)
        .find('img')
        .prop('alt')
    ).toEqual('altText')
    expect(
      wrapper
        .find(Picture)
        .find('img')
        .prop('width')
    ).toEqual(1920)
    expect(
      wrapper
        .find(Picture)
        .find('img')
        .prop('height')
    ).toEqual(1080)
  })
})
