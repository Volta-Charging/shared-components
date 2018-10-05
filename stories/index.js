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
  .add('Marker', () => (
    <Marker 
      level={'L2'}
      pie={30}
      text={2}
      pie1={null}
      pie2={null}
    >
    </Marker>
  ))
  .add('with L3 only', () => (
    <Marker 
      level={'L3'}
      pie={50}
      text={2}
      pie1={null}
      pie2={null}
    >
    </Marker>
  ))
  .add('With Notification Badge', () => (
    <Marker
      issues={1}
      text={2}
      pie={30}
      pie1={null}
      pie2={null}
    >
    </Marker>
  ))
  .add('With Large Notification Badge', () => (
    <Marker
      issues={2}
      pie={null}
      pie1={30}
      pie2={40}
      text={1}
    >
    </Marker>
  ))

storiesOf('Cluster', module)
  .add('Cluster (L2)', () => (
    <Cluster
      valueL2={5}
      valueL3={null}
      text={3}
    >
    </Cluster>
  ))
  .add('With Notification Badge (L2)', () => (
    <Cluster
      issues={2}
      text={1}
      valueL2={5}
      valueL3={null}
    >
    </Cluster>
  ))
  .add('Large Cluster (L3)', () => (
    <Cluster
      text={1}
      valueL2={5}
      valueL3={5}
      text={3}
    >
    </Cluster>
  ))
  .add('With Notification Badge (L3)', () => (
    <Cluster
      issues={2}
      text={1}
      valueL2={5}
      valueL3={6}
    >
    </Cluster>
  ))

