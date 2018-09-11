import styled from 'styled-components'

import COLOR from '../../Color'

export const Notification = styled.div`
  position: absolute;
  top: -10px;
  left: 0px;
  width: 20px;
  height: 20px;
  font-size: 12px;
  border-radius: 50%;
  color: ${COLOR.WHITE};
  font-family: 'MalloryMP-Book';
  background-color: ${COLOR.ORANGE_DARK};
  box-shadow: 0 2px 4px 0 ${COLOR.BLACK_WITH_OPACITY_50};
  align-items: center;
  justify-content: center;
  display: flex;
`