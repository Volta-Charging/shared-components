import React from 'react'

import {
  Container,
  PieContainer,
  ClusterCount,
} from './styled'

const SmallCluster = ({ text, size, onClick }) => (
  <Container className="container" onClick={onClick} markerWidth={size}>
    <PieContainer className="pie-container">
      <ClusterCount value={text}>{text}</ClusterCount>
    </PieContainer>
  </Container>
)

export default SmallCluster
