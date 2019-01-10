import React,{Component} from 'react';
import WonderPush from './WonderPush';

export default class Wonderpush extends Component {
  constructor(props){
    super(props);

    WonderPush.init({
      webKey: this.props.webKey,
      applicationName:        this.props.applicationName,
      notificationDefaultUrl: this.props.notificationDefaultUrl,
      notificationIcon:       this.props.notificationIcon
    });

  }
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
