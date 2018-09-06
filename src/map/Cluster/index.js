import React from 'react'
import { withProps } from 'recompose'

import SmallCluster from './Small'

const Cluster = props =>  <SmallCluster {...props} />

export default withProps(props => ({
  hasL3: props.valueL3 !== null,
}))(Cluster)
