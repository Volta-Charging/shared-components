import React from 'react'
import Props from 'prop-types'

import PieChart from '../PieChart'
import COLOR from '../../Color'
import NotificationBadge from '../Badge'

import {
  Container,
  PieContainer,
  ClusterCount,
  ClusterContainer,
} from './styled'

const LargeCluster = ({ valueL2, valueL3, text, size, onClick, issues }) => (
  <Container markerWidth={size} onClick={onClick}>
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
          fill={COLOR.BLUE_MEDIUM}
          height={size - 10}
          value={valueL3}
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
        <PieChart
          fill={COLOR.GREY_DARK}
          height={size - 24}
          value={100}
          width={size - 24}
        />
      </PieContainer>
      <PieContainer>
        <PieChart
          fill={COLOR.BLUE_LIGHT}
          height={size - 24}
          value={valueL2}
          width={size - 24}
        />
      </PieContainer>
      <PieContainer>
        <PieChart
          fill={COLOR.BLACK}
          height={size - 35}
          value={100}
          width={size - 35}
        />
      </PieContainer>
      <PieContainer>
        <ClusterCount value={text}>{text}</ClusterCount>
      </PieContainer>
    </ClusterContainer>
    <NotificationBadge issues={issues}/>
  </Container>
)

LargeCluster.propTypes = {
  size: Props.number,
  text: Props.number.isRequired,
  valueL2: Props.number.isRequired,
  valueL3: Props.number,
}

LargeCluster.defaultProps = {
  size: 26,
  valueL3: 0,
}

export default LargeCluster
