import React, {Component} from 'react'
import {withWonderPush} from 'react-wonderpush'

export class EventToTrack extends Component {
  constructor(props){
    super(props)
    this.fireEvent = this.fireEvent.bind(this)
  }

  fireEvent(e){
    this.props.wp.trackEvent(this.props.event)
  }

  render(){
    const {event, dictionary} = this.props
    return (
      <div 
        className={"event " + event} 
        onClick={this.fireEvent} 
      > 
        {dictionary[event]} 
      </div>
    )
  }
}

export default withWonderPush(EventToTrack)