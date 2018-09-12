import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Badge from '../src/marker/Badge'
import Marker from '../src/marker/SiteMarker'

storiesOf('Badge', module)
  .add('Issue', () => (
    <Badge
      issues={1}
      positionAbsolute={false}
    >
    </Badge>
  ))

storiesOf('Marker', module)
  .add('Marker', ()=>(
    <Marker></Marker>
  ))
  .add('With Notification Badge', ()=> (
    <Marker
      issues={1}
      positionAbsolute={true}
    >
    </Marker>
  ))
