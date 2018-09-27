import styled from 'styled-components'

import COLOR from '../../Color'

export const Notification = styled.div`
  ${({ positionAbsolute }) => positionAbsolute && `
    position: absolute;
    top: 0px;
    left: 0px;
  `}
  width: 20px;
  height: 20px;
  font-size: 12px;
  color: ${COLOR.WHITE};
  border-radius: 50%;
  font-family: 'MalloryMP-Book';
  background-color: ${COLOR.ORANGE_DARK};
  box-shadow: 0 2px 4px 0 ${COLOR.BLACK_WITH_OPACITY_50};
  align-items: center;
  justify-content: center;
  display: flex;
`
