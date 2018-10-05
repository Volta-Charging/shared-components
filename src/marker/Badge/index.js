import React from 'react'

import { Notification } from './styled'

const NotificationBadge = ({issues}) => issues ?
  <Notification >
    {issues}
  </Notification> : null

NotificationBadge.defaultProps = {
  issues: null,
}

export default NotificationBadge
