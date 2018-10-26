import React from 'react'
import Props from 'prop-types'

import COLOR from '../../Color'

const pie = (radius, value) => {
  const positionX = radius + (Math.sin((2 * Math.PI) / (100 / value)) * radius)
  const positionY = radius - (Math.cos((2 * Math.PI) / (100 / value)) * radius)

  const long = value <= 50 ? 0 : 1
  // eslint-disable-next-line
  const path = `M${radius},${radius} L${radius},${0}, A${radius},${radius} 0 ${long},1 ${positionX},${positionY} Z`

  return path
}

const line = (radius, value = null) => {
  if (value === null) {
    return `M${radius},${radius} L${radius},${0}`
  }
  const positionX = radius + (Math.sin((2 * Math.PI) / (100 / value)) * radius)
  const positionY = radius - (Math.cos((2 * Math.PI) / (100 / value)) * radius)

  return `M${radius},${radius} L${positionX},${positionY}`
}

// eslint-disable-next-line react/prop-types
const PieChart = ({ width, height, fill, value, marginBottom }) => {
  if (!value || value <= 0) {
    return null
  }

  const viewBox = `0 0 ${width} ${height}`

  // draw circle
  if (value === 100) {
    return (
      <svg width={width} height={height} viewBox={viewBox}>
        <circle cx={width / 2} cy={height / 2} r={width / 2} fill={fill} />
      </svg>
    )
  }

  const viewBoxPie = `0 0 ${width} ${height - marginBottom}`

  // draw wedge
  return (
    <svg width={width} height={height} viewBox={viewBoxPie}>
      <path d={pie(width / 2, value)} fill={fill} />
      <g stroke={COLOR.BLACK} strokeWidth={1.5}>
        <path d={line(width / 2)} />
        <path d={line(width / 2, value)} />
      </g>
    </svg>
  )
}

PieChart.propTypes = {
  fill: Props.string.isRequired,
  height: Props.number.isRequired,
  marginBottom: Props.number,
  value: Props.number.isRequired,
  width: Props.number.isRequired,
}

PieChart.defaultProps = {
  marginBottom: 0,
  value: 0,
}

export default PieChart
