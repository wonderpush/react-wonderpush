import React,{Component} from 'react';
import WonderPush from './WonderPush';

export default function withWonderPush (OriginalComponent) {
  class WonderpushHOC extends Component {
    constructor(){
      this.state = { wp }
    }

    componentWillMount(){
      WonderPush.ready( wp => this.setState(wp))
    }

    render(){
      return <OriginalComponent wp={this.state.wp} {...this.props}/>
    }
  }
  return WonderpushHOC;
}