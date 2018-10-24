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
      text={2}
      valueL2={50}
      valueL3={null}
    >
    </Marker>
  ))
  .add('with L3 only', () => (
    <Marker
      text={2}
      valueL2={null}
      valueL3={50}
    >
    </Marker>
  ))
  .add('With Notification Badge', () => (
    <Marker
      issues={1}
      text={2}
      valueL2={null}
      valueL3={75}
    >
    </Marker>
  ))
  .add('With No Available Chargers', () => (
    <Marker
      issues={2}
      valueL2={0}
      valueL3={0}
      text={2}
    >
    </Marker>
  ))
  .add('With Large Notification Badge', () => (
    <Marker
      issues={2}
      valueL2={0}
      valueL3={50}
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
      valueL2={0}
      valueL3={5}
      text={3}
    >
    </Cluster>
  ))
  .add('Large Cluster (L3) with No Available Chargers', () => (
    <Cluster
      text={2}
      valueL2={0}
      valueL3={0}
    >
    </Cluster>
  ))
  .add('With Notification Badge (L3)', () => (
    <Cluster
      issues={2}
      text={9}
      valueL2={3}
      valueL3={6}
    >
    </Cluster>
  ))

