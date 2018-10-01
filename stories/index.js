import React from 'react'
import { storiesOf } from '@storybook/react'

import Badge from '../src/marker/Badge'
import Marker from '../src/marker/SiteMarker'
import Cluster from '../src/marker/Cluster'

storiesOf('Badge', module)
  .add('Issue', () => (
    <Badge
      issues={1}
    >
    </Badge>
  ))

storiesOf('Marker', module)
  .add('Marker', () => <Marker text={2}></Marker>)
  .add('With Notification Badge', ()=> (
    <Marker
      issues={1}
      text={2}
    >
    </Marker>
  ))

storiesOf('Cluster', module)
  .add('Cluster', () => (
    <Cluster
      text={1}
      size={50}
    >
    </Cluster>
  ))
  .add('With Notification Badge', ()=> (
    <Cluster
      issues={2}
      text={1}
      size={50}
    >
    </Cluster>
  ))

storiesOf('Pie', module)
  .add('Pie', () => (
    <Cluster
      text={1}
      size={50}
    >
    </Cluster>
  ))
  .add('With Notification Badge', ()=> (
    <Cluster
      issues={2}
      text={1}
      size={50}
    >
    </Cluster>
  ))
