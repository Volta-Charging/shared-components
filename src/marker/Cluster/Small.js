import React from 'react'

import  NotificationBadge from '../Badge'
import COLOR from '../../Color'
import PieChart from '../PieChart'

import {
  Container,
  ClusterContainer,
  PieContainer,
  ClusterCount,
} from './styled'

const SmallCluster = ({ valueL2, text, size, onClick, issues }) => (
  <Container markerWidth={size} onClick={onClick} >
    <ClusterContainer markerWidth={size}>
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
          value={valueL2}
          width={size - 10}
        />
      </PieContainer>
      <PieContainer>
        <PieChart
          fill={COLOR.BLACK}
          height={size - 20}
          value={100}
          width={size - 20}
        />
      </PieContainer>
      <PieContainer>
        <ClusterCount value={text}>{text}</ClusterCount>
      </PieContainer>
    </ClusterContainer>
    <NotificationBadge issues={issues}/>
  </Container>
)

export default SmallCluster
