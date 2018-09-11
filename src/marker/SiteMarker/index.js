import React, { Component } from 'react'

import COLOR from '../../Color'
import NotificationBadge from '../Badge'

class SiteMarker extends Component {

  constructor(props) {
    super(props)

    this.state = {
      height: 50,
      width: 40,
    }
  }

  getColorFromLevel = level => {
    if (level === 'L2') {
      return COLOR.LIGHT_BLUE
    }
    return COLOR.BLUE
  }

  render() {
    const { text, onClick, issues } = this.props
    const { width, height } = this.state
    const viewBox = `0 0 ${width} ${height}`
    const path = 'M32.5813 6.4529C29.0977 2.9462 24.346.9792 19.4187 1.0002c-5.1862.022-10.0411 2.1777-13.5734 6.0538-3.0024 3.295-4.7259 7.6014-4.839 12.0707-.132 5.1561 1.8029 10.0247 5.4115 13.6562.4227.4254 7.4976 9.5645 7.4976 9.5645l4.1301 5.916c1.4545 2.3445 1.4545 2.2916 2.7574 0l4.4882-5.94s7.71-9.9259 8.4462-10.8145c2.4706-2.9815 3.954-6.6989 4.2178-10.573.3711-5.4587-1.5726-10.6558-5.3738-14.481z'

    return (
      <div>
        <NotificationBadge issues={issues}/>
        <svg onClick={onClick} width={width} height={height} viewBox={viewBox}>
          <path d={path} fill={COLOR.BLACK} stroke={COLOR.WHITE} />
          <text x={width / 2} y={height / 2} fill={COLOR.WHITE} textAnchor="middle">{text} </text>
        </svg>
      </div>
    )
  }
}

SiteMarker.defaultProps = {
  level: 'L2',
  pie: null,
  pie1: null,
  pie2: null,
}

export default SiteMarker
