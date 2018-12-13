import React,{Component} from 'react';
import WonderPush from 'react-wonderpush';
// import WonderPush from './WonderPushInit'
import WonderPushInit from './components/WonderPushInit.js';

WonderPush.init({
  webKey: "a6a00ccf60ffee04cb201cead4304fc4db8fa8e0a2823a77466e8c8ebeed4e25",
  applicationName:        'React WonderPush Demo',
  notificationDefaultUrl: 'https://www.wonderpush.com/demo/',
  notificationIcon:       '../img/image.png'
});

export default function withWonderPush (OriginalComponent) {
  class WonderpushHOC extends Component {
    constructor(props){
      super(props);
      this.state = {
        init : WonderPush.init
      }
    }
    render(){
      return <OriginalComponent init={this.state.init}/>
    }
  }
  return WonderpushHOC;
}





