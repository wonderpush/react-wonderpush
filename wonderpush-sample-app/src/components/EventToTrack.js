import React from 'react'
import { withWonderPush } from 'react-wonderpush'

const EventToTrack = ({wonderPush, event, dictionary}) =>
  <div
    className={"event " + event}
    onClick={() => wonderPush.push(['trackEvent', event])}
  >
    {dictionary[event]}
  </div>

export default withWonderPush(EventToTrack)
