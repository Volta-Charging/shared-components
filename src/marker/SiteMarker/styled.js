import styled from 'styled-components'

import COLOR from '../../Color'

export const Container = styled.div`
  width: ${({ markerWidth }) => markerWidth}px;
  height: ${({ markerHeight }) => markerHeight}px;
  position: relative;
  padding: 9px;
`
export const MarkerContainer = styled.div`
  display: flex;
  width: ${({ markerWidth }) => markerWidth}px;
  height: ${({ markerHeight }) => markerHeight}px;
  font-family: 'MalloryMP-Book';
  position: relative;
`

export const PieContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  top: 0px;
  left: 0px;
  width: ${({ width }) => width}px;
  height:${({ height, marginBottom }) => height - marginBottom}px;
`
export const MarkerCount = styled.span`
  color: ${COLOR.WHITE};
  letter-spacing: -0.2px;
  font-size: ${({ value }) => value > 99 ? 14 : 17}px;
  font-family: 'MalloryMP-Book';
`

