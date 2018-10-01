import React from 'react'
import { storiesOf } from '@storybook/react'

import Badge from '../src/marker/Badge'
import Marker from '../src/marker/SiteMarker'
import Cluster from '../src/marker/Cluster'
import Pie from '../src/marker/PieChart'
import COLOR from '../src/Color'

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
    <div>

    <Cluster
    text={1}
    size={50}>
      
    </Cluster>
    <Pie
    width={50}
    height={50}
    fill={COLOR.BLUE_LIGHT}
    value={80}
    >
  </Pie>
  <Pie
    width={30}
    height={30}
    fill={COLOR.GREY_DARK}
    value={100}
    >
  </Pie>
  <Pie
    fill={COLOR.BLACK}
    height={30 - 18}
    marginBottom={12}
    value={100}
    width={30 - 18}
    />
    </div>
  ))
