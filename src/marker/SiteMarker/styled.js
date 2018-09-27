import styled from 'styled-components'

import { loadFonts } from '../../Fonts'

loadFonts()
export const MarkerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ markerWidth }) => markerWidth}px;
  height: ${({ markerHeight }) => markerHeight}px;
  font-family: 'MalloryMP-Book';
`
export const Container = styled.div`
  position: relative;
  width: ${({ markerWidth }) => markerWidth}px;
  height: ${({ markerHeight }) => markerHeight}px;
  padding: 8px;
`
