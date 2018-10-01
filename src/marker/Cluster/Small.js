import React from 'react'

import  NotificationBadge from '../Badge'
import COLOR from '../../Color'
import {
  Container,
  ClusterContainer,
  PieContainer,
  ClusterCount,
} from './styled'
import PieChart from '../PieChart'
const SmallCluster = ({ text, size, onClick, issues }) => (
  <Container markerWidth={size}>
    <NotificationBadge issues={issues}/>
    <ClusterContainer onClick={onClick} markerWidth={size}>
      <PieContainer>
        <PieChart
          fill={COLOR.GREY_DARK}
          height={size - 10}
          value={100}
          width={size - 10}
        />
      </PieContainer>
      <PieContainer>
        <PieChart
          fill={COLOR.BLUE_LIGHT}
          height={size - 10}
          value={80}
          width={size - 10}
        />
      </PieContainer>
      <PieContainer>
        <PieChart
          fill={COLOR.BLACK}
          height={size - 21}
          value={100}
          width={size - 21}
        />
      </PieContainer>
      <PieContainer>
        <ClusterCount value={text}>{text}</ClusterCount>
      </PieContainer>
    </ClusterContainer>
  </Container>
)

export default SmallCluster
