import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { CmsAppHeader } from './CmsAppHeader'
import { header } from '../../__mocks__'

const logoData = {
  logo: {
    id: 'ckju2x3i00apu0b12o0b4fmz0',
    url: 'https://media.graphcms.com/xHlcN913TUWCVhI8CrAc',
    handle: 'xHlcN913TUWCVhI8CrAc',
    fileName: 'DANONE_LOGO.png',
    mimeType: 'image/png',
    width: 1115,
    height: 485,
    size: 161273,
  },
}

storiesOf('CMS Components/AppHeader', module).add('Default', () => {
  return (
    <CmsAppHeader
      headerContent={header.data.header}
      logoUrl={logoData?.logo.url}
      onLogoClick={action('Logo')}
      button={{ actionLabel: 'Log Out', href: '#' }}
    />
  )
})
