import React,{Component} from 'react';
import {withWonderPush} from 'react-wonderpush'

export class WPEventList extends Component {
  render(){
    return(
      <div>
        <div id="eventList">
          <div className="event firstVisit" data-event="firstVisit">First visit</div>
          <div className="event newsRead" data-event="newsRead">News read</div>
          <div className="event gameOver" data-event="gameOver">Game over</div>
          <div className="event like" data-event="like">Like</div>
          <div className="event addToCart" data-event="addToCart">Add to cart</div>
          <div className="event purchase" data-event="purchase">Purchase</div>
          <div className="event eiffelTower" data-event="geofencing" data-geo-name="eiffelTower">Near Eiffel Tower</div>
          <div className="event Louvre" data-event="geofencing" data-geo-name="louvre">Near Louvre</div>
          <div className="event inactivity" data-event="inactivity">Inactive user</div>
        </div>
      </div>
    )
  }
}
export default withWonderPush(WPEventList)