import React from 'react'

import  NotificationBadge from '../Badge'

import {
  Container,
  PieContainer,
  ClusterCount,
} from './styled'

const SmallCluster = ({ text, size, onClick, issues }) => (
  <Container className="container" onClick={onClick} markerWidth={size}>
    <NotificationBadge issues={issues}/>
    <PieContainer className="pie-container">
      <ClusterCount value={text}>{text}</ClusterCount>
    </PieContainer>
  </Container>
)

export default SmallCluster
