import React from 'react'
import Props from 'prop-types'
import _ from 'lodash'
import { withProps, lifecycle, compose } from 'recompose'

import SmallCluster from './Small'
import LargeCluster from './Large'

const Cluster = props =>  props.hasL3
  ? <LargeCluster {...props} />
  : <SmallCluster {...props} />

Cluster.propTypes = {
  hasL3: Props.bool.isRequired,
  text: Props.number.isRequired,
  valueL2: Props.number.isRequired,
  valueL3: Props.number,
}

Cluster.defaultProps = {
  valueL3: Props.number,
}

export default compose(withProps(props => ({
  hasL3: props.valueL3 !== null,
  size: props.valueL3 !== null ? 66 : 50,
})),
lifecycle({
  shouldComponentUpdate(nextProps){
    return !_.isEqual(this.props, nextProps)
  },
}))
(Cluster)
