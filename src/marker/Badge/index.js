import React from 'react'

import { Notification } from './styled'

const NotificationBadge = ({issues, positionAbsolute}) => issues ?
  <Notification positionAbsolute={positionAbsolute}>
    {issues}
  </Notification> : null

NotificationBadge.defaultProps = {
  issues: null,
  positionAbsolute: true,
}

export default NotificationBadge
