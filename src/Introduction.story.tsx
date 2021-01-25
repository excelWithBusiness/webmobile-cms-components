import { storiesOf } from '@storybook/react'
import React from 'react'
import Readme from '../README.md'

storiesOf('CMS Components/Introduction', module).add(
  'Readme',
  () => {
    return <div></div>
  },
  {
    info: Readme,
  }
)
