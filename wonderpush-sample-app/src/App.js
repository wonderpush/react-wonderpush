import React, { Component } from 'react';
import ReactWP from 'react-wonderpush';

const wrapper = ReactWP.getInstance('head');

wrapper.init("a6a00ccf60ffee04cb201cead4304fc4db8fa8e0a2823a77466e8c8ebeed4e25", {
  // You can modify or translate the following:
  externalBoxMessage: "We'd like to send you notifications",
  externalBoxExampleTitle: "Example notification",
  externalBoxExampleMessage: "This is an example notification",
  externalBoxDisclaimer: "You can always unsubscribe at anytime.",
  externalBoxProcessingMessage: "Subscribing...",
  externalBoxSuccessMessage: "Thanks for subscribing!",
  externalBoxFailureMessage: "Sorry, something went wrong.",
  externalBoxTooLongHint: "Poor connection or private browsing?",
  externalBoxCloseHint: "Close",
  modalBoxMessage: "We will send you personalized notifications.<br/>You can always unsubscribe at any time.",
  modalBoxButton: "Got it!"
});

class App extends Component {
  constructor(){
    super();
    console.log('ReactWP', wrapper);
  }
  render() {
    return (
      <div className="App">
      <h1>wonderpsuh sample app</h1>
      </div>
    );
  }
}

export default App;
