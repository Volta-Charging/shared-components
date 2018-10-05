import React, { Component } from 'react'
import Props from 'prop-types'

import COLOR from '../../Color'
import NotificationBadge from '../Badge'
import PieChart from '../PieChart'

import {  MarkerCount, MarkerContainer, Container, PieContainer } from './styled'
class SiteMarker extends Component {

  constructor(props) {
    super(props)

    this.state = {
      height: !props.pie1 ? 50 : 61,
      width: !props.pie1 ? 39 : 47,
    }
  }

  getColorFromLevel = (level) => {
    if (level === 'L2') {
      return COLOR.BLUE_LIGHT
    }
    return COLOR.BLUE_MEDIUM
  }

  render() {
    const { level, pie, pie1, pie2, text, onClick, issues } = this.props
    const { width, height } = this.state
    const viewBox = `0 0 ${width} ${height}`
    const pin = isLarge => {
      // eslint-disable-next-line
      const path = (isLarge) ? 'M39.41 7.566A22.574 22.574 0 0 0 23.4 1c-6.307.027-12.212 2.622-16.508 7.29a22.348 22.348 0 0 0-5.885 14.534c-.16 6.208 2.192 12.07 6.581 16.443.514.512 9.119 11.516 9.119 11.516l5.023 7.124c1.769 2.823 1.769 2.759 3.354 0l5.458-7.153s9.377-11.951 10.273-13.021a22.263 22.263 0 0 0 5.13-12.731c.45-6.573-1.913-12.83-6.536-17.436z' : 'M32.5813 6.4529C29.0977 2.9462 24.346.9792 19.4187 1.0002c-5.1862.022-10.0411 2.1777-13.5734 6.0538-3.0024 3.295-4.7259 7.6014-4.839 12.0707-.132 5.1561 1.8029 10.0247 5.4115 13.6562.4227.4254 7.4976 9.5645 7.4976 9.5645l4.1301 5.916c1.4545 2.3445 1.4545 2.2916 2.7574 0l4.4882-5.94s7.71-9.9259 8.4462-10.8145c2.4706-2.9815 3.954-6.6989 4.2178-10.573.3711-5.4587-1.5726-10.6558-5.3738-14.481z'

      return path
    }
    if (pie !== null) {

      return (
        <Container markerWidth={width} markerHeight={height} onClick={onClick}>
          <MarkerContainer  markerWidth={width} markerHeight={height}>
            <PieContainer>
              <svg onClick={onClick} width={width} height={height} viewBox={viewBox}>
                <path d={pin(pie1)} fill={COLOR.BLACK} stroke={COLOR.WHITE} />
              </svg>
            </PieContainer>
            <PieContainer height={height} width={width} marginBottom={12} padding={0}>
              <PieChart
                fill={COLOR.GREY_DARK}
                height={height - 12 }
                value={100}
                width={width - 12}
                marginBottom={12}
              />
            </PieContainer>
            <PieContainer height={height} width={width} marginBottom={12} padding={4}>
              <PieChart
                fill={this.getColorFromLevel(level)}
                height={height - 12}
                width={width - 12}
                value={pie}
                marginBottom={10}
              />
            </PieContainer>
            <PieContainer height={height} width={width} marginBottom={12} padding={4}>
              <PieChart
                fill={COLOR.BLACK}
                height={height - 20}
                width={width - 20}
                value={100}
                marginBottom={12}
              />
            </PieContainer>
            <PieContainer height={height} width={width} marginBottom={12} padding={4}>
              <MarkerCount>{text}</MarkerCount>
            </PieContainer>
          </MarkerContainer>
          <NotificationBadge issues={issues}/>
        </Container>
      )
    }
    return (
      <Container markerWidth={width} markerHeight={height} onClick={onClick}>
        <MarkerContainer  markerWidth={width} markerHeight={height}>
          <PieContainer>
            <svg onClick={onClick} width={width} height={height} viewBox={viewBox}>
              <path d={pin(pie1)} fill={COLOR.BLACK} stroke={COLOR.WHITE} />
            </svg>
          </PieContainer>
          <PieContainer height={height} width={width} marginBottom={14} padding={4}>
            <PieChart
              fill={COLOR.GREY_DARK}
              height={height - 8 }
              value={100}
              width={width - 8}
              marginBottom={14}
            />
          </PieContainer>
          <PieContainer height={height} width={width} marginBottom={14} padding={4}>
            <PieChart
              fill={COLOR.BLUE_MEDIUM}
              height={height - 8}
              width={width - 8}
              value={pie1}
              marginBottom={14}
            />
          </PieContainer>
          <PieContainer height={height} width={width} marginBottom={14} padding={4}>
            <PieChart
              fill={COLOR.BLACK}
              height={height - 16}
              width={width - 16}
              value={100}
              marginBottom={14}
            />
          </PieContainer>
          <PieContainer height={height} width={width} marginBottom={14} padding={8}>
            <PieChart
              fill={COLOR.GREY_DARK}
              height={height - 18}
              width={width - 18}
              value={100}
              marginBottom={14}
            />
          </PieContainer>
          <PieContainer height={height} width={width} marginBottom={14} padding={8}>
            <PieChart
              fill={COLOR.BLUE_LIGHT}
              height={height - 18}
              width={width - 18}
              value={pie2}
              marginBottom={14}
            />
          </PieContainer>
          <PieContainer height={height} width={width} marginBottom={14} padding={14}>
            <PieChart
              fill={COLOR.BLACK}
              height={height - 26}
              width={width - 26}
              value={100}
              marginBottom={14}
            />
          </PieContainer>
          <PieContainer height={height} width={width} marginBottom={14} padding={4}>
            <MarkerCount>{text}</MarkerCount>
          </PieContainer>
        </MarkerContainer>
        <NotificationBadge issues={issues}/>
      </Container>
    )
  }
}

SiteMarker.propTypes = {
  level: Props.string,
  pie: Props.number,
  pie1: Props.number,
  pie2: Props.number,
  text: Props.number.isRequired,
}

SiteMarker.defaultProps = {
  level: 'L2',
  pie: null,
  pie1: null,
  pie2: null,
}

export default SiteMarker
