import styled from 'styled-components'

import COLOR from '../../Color'

export const ClusterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ markerWidth }) => markerWidth}px;
  height: ${({ markerWidth }) => markerWidth}px;
  border: solid;
  border-color: white;
  border-width: 1px;
  border-radius: ${({ markerWidth }) => markerWidth / 2}px;
  background-color: ${COLOR.BLACK};
`
export const PieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ClusterCount = styled.span`
  color: ${COLOR.WHITE};
  letter-spacing: -0.2px;
  font-size: ${({ value }) => value > 99 ? 14 : 17}px;
  font-family: 'MalloryMP-Book';
`

// Not currently used -- to be used for pie chart implementation
export const ActiveCircle = styled.div`
  position: absolute;
  bottom: -7.5px;
  left: ${({ markerWidth }) => (markerWidth / 2) - 2.4}px;
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: ${COLOR.BLUE};
`

export const Container = styled.div`
  width: ${({ markerWidth }) => markerWidth}px;
  height: ${({ markerWidth }) => markerWidth}px;
  position: relative;
  padding: 8px;
`
