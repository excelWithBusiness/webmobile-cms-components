import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import {CmsAppFooter} from './CmsAppFooter'
import { footer } from '../../__mocks__'

const logoData = {
  "logo": {
    "id": "ckju2x3i00apu0b12o0b4fmz0",
    "url": "https://media.graphcms.com/xHlcN913TUWCVhI8CrAc",
    "handle": "xHlcN913TUWCVhI8CrAc",
    "fileName": "DANONE_LOGO.png",
    "mimeType": "image/png",
    "width": 1115,
    "height": 485,
    "size": 161273
  }
}


storiesOf('CMS Components/AppFooter', module)
  .add('Default', () => {
  return (
    <CmsAppFooter links={footer?.data.footer.links} description={footer?.data.footer.description} logoUrl={logoData.logo.url} />
  )
})
