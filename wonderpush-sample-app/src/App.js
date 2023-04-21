import React from 'react';
import EventList from './components/EventList';
import SwitchButton from './components/SwitchButton';
import './App.css';
import { WonderPush } from 'react-wonderpush';

const App = () =>
  <div className="App">
    <WonderPush options={{
      webKey: "a6a00ccf60ffee04cb201cead4304fc4db8fa8e0a2823a77466e8c8ebeed4e25",
      applicationName: "React WonderPush Demo",
      notificationDefaultUrl: "https://www.wonderpush.com/demo/",
      notificationIcon: "../img/image.png"
    }}>
      <h1>Connecting to WonderPush…</h1>
      <SwitchButton/>
      <EventList/>
    </WonderPush>;
  </div>

export default App
