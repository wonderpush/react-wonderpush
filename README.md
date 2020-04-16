# react-wonderpush

This service lets you integrate Wonderpush in your React applications easily.
- [Official website](https://wonderpush.com)

## Features

## Installation and Quick Start

### 1- Installation:
You can install the module from a package manager of your choice directly from the command line

```sh
# Yarn
yarn add react-wonderpush

# NPM
npm i react-wonderpush
```


### 2- In your application

```javascript
import WonderPush from 'react-wonderpush';
<WonderPush options = {{
  webKey: "a6a00ccf60ffee04cb201cead4304fc4db8fa8e0a2823a77466e8c8ebeed4e25",
  applicationName: "React WonderPush Demo",
  notificationDefaultUrl: "https://www.wonderpush.com/demo/",
  notificationIcon: "../img/image.png"
}}>
  <div className="App">
    Your components here ...
  </div>
</WonderPush>
```

Initialization options are described here: https://docs.wonderpush.com/docs/website-sdk-reference#section-init


### 3- In your components

Integrate a WonderPush subscription:

```javascript
import React,{Component} from 'react';

const SwitchButton = () => (
    <div className="switch-container">
      <div id="wonderpush-subscription-switch" data-on="YES" data-off="NO"></div>
    </div>
  )

export default SwitchButton
```

Create a component who needs WonderPush:

```javascript
import React, {Component} from 'react'
import {withWonderPush} from 'react-wonderpush'

export class EventToTrack extends Component {
  constructor(props){
    super(props)
    this.fireEvent = this.fireEvent.bind(this)
  }

  fireEvent(e){
    this.props.wonderPush.trackEvent("myEvent")
  }

  render(){
    return (
      <div 
        className={"event myEvent"} 
        onClick={this.fireEvent} 
      > 
        Click on this div will track event name myEvent
      </div>
    )
  }
}

export default withWonderPush(EventToTrack, {waitWonderPushReady: true})
```

`withWonderPush` takes two arguments:
  - `Component`
  - `options`

Options available: 
  - `waitWonderPushReady`: boolean (default: `false`)

## Sample app

To help you with your implementation we provided a sample application. Run it using:

```bash
cd wonderpush-sample-app
yarn start
```

then go to http://localhost:3000
