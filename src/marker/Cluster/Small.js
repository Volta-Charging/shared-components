import React from 'react'

import  NotificationBadge from '../Badge'

import {
  Container,
  ClusterContainer,
  PieContainer,
  ClusterCount,
} from './styled'

const SmallCluster = ({ text, size, onClick, issues }) => (
  <Container markerWidth={size}>
    <NotificationBadge issues={issues}/>
    <ClusterContainer onClick={onClick} markerWidth={size}>
      <PieContainer>
        <ClusterCount value={text}>{text}</ClusterCount>
      </PieContainer>
    </ClusterContainer>
  </Container>
)

export default SmallCluster
