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
WonderPush.init({
  webKey: 'YOUR-WEBKEY-HERE',
});
```
### 3- In your components
This example shows how to create a link to subscribe to WonderPush notifications. The link only appears for users that haven't subscribed already, and disappears once subscription is complete.
```javascript
import WonderPush from 'react-wonderpush';

class NotificationSignupComponent extends Component {
  constructor(props) {
    this.state = {
      wonderPushReady: false,
      userIsSignedUpWithWonderPush: false,
    };
    // Call WonderPush to find out if the user is subscribed.
    WonderPush.ready((WonderPushSDK) => {
      this.setState({
        userIsSignedUpWithWonderPush: WonderPushSDK.getNotificationEnabled(),
        wonderPushReady: true,
      });
    });
  }
  render() {
    const { wonderPushReady, userIsSignedUpWithWonderPush } = this.state;
    // Do not display anything when user is already subscribed or while we're waiting to find out
    if (!wonderPushReady || userIsSignedUpWithWonderPush) return null;
    // Handle clicks
    const onClick = (event) => {
      if (event) event.preventDefault();
      // Subscribe user to push notifications
      WonderPush.ready((WonderPushSDK) => {
        WonderPushSDK.setNotificationEnabled(true, event).then(() => {
          // Update our state once the subscription is successful
          this.setState({ userIsSignedUpWithWonderPush: true })
        });
      });
    };
    return <a onClick={onClick} href="#">Subscribe to push notifications</a>;
  }
}
```




## Sample app
To help you with your implementaiton we provided a sample application. to run it
```bash
cd wonderpush-sample-app
yarn start
```
then go to [http://localhost:3000](http://localhost:3000)


## License

As React itself, this module is released under the permissive [MIT License](http://revolunet.mit-license.org). Your contributions are always welcome.

## Development

After forking you will need to run the following from a command line to get your environment setup:

1. ```yarn install```

After install you have the following commands available to you from a command line:

1. ```gulp```
