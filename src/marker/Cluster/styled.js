import styled from 'styled-components'

import COLOR from '../../Color'

export const Container = styled.div`
  width: ${({ markerWidth }) => markerWidth}px;
  height: ${({ markerWidth }) => markerWidth}px;
  padding: 8px;
  position: relative;
`

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
  position: relative;
`

export const PieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`

export const ClusterCount = styled.span`
  color: ${COLOR.WHITE};
  letter-spacing: -0.2px;
  font-size: ${({ value }) => value > 99 ? 14 : 17}px;
  font-family: 'MalloryMP-Book';
`
