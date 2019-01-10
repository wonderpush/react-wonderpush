import React, { Component } from 'react';
import EventList from './components/EventList';
import SwitchButton from './components/SwitchButton';
import './App.css';
import {WonderPush} from 'react-wonderpush';


/*WonderPush.init({
  webKey: "a6a00ccf60ffee04cb201cead4304fc4db8fa8e0a2823a77466e8c8ebeed4e25",
  applicationName:        'React WonderPush Demo',
  notificationDefaultUrl: 'https://www.wonderpush.com/demo/',
  notificationIcon:       '../img/image.png'
});*/


// console.log(new SwitchButton());
class App extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    /*WonderPush.ready(function(WonderPushSDK) {
      WonderPushSDK.Notification.setOptInOptions({
        modalBoxMessage: "We will send you personalized notifications.<br/>You can always unsubscribe at any time.",
        modalBoxButton: "Got it!",
        externalBoxProcessingMessage: "Subscribing...",
        externalBoxSuccessMessage: "Thanks for subscribing!",
        externalBoxFailureMessage: "Sorry, something went wrong.",
        externalBoxTooLongHint: "Poor connection or private browsing?",
        externalBoxCloseHint: "Close"
      });
      if (WonderPushSDK.isNativePushNotificationSupported()) {
          // For best results, test if:
          // - user engagement is sufficient
          // - user is willing to accept notifications,
          //   using a non intrusive information message
          WonderPushSDK.setNotificationEnabled(true);
      }
    });*/
  }
  render() {
    return (
        <WonderPush
          webKey="a6a00ccf60ffee04cb201cead4304fc4db8fa8e0a2823a77466e8c8ebeed4e25"
          applicationName="React WonderPush Demo"
          notificationDefaultUrl="https://www.wonderpush.com/demo/"
          notificationIcon="../img/image.png"
        >
          <div className="App">
            <h1>Connecting to wonderpush</h1>
            <SwitchButton/>
            <EventList/>
          </div>
        </WonderPush>
    );
  }
}

export default App
