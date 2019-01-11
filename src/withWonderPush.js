import React,{Component} from 'react';
import WonderPush from './WonderPush';

export default function withWonderPush (OriginalComponent, options = {}) {
  class WonderpushHOC extends Component {
    constructor(props){
      super(props)
      this.state = { 
        wp: WonderPush,
        ready: false
      }
    }
    componentDidMount(){
      WonderPush.ready( wp => { this.setState({wp, ready: true}) })
    }
    render(){
      const  waitWonderPushReady = options && options.waitWonderPushReady
      return waitWonderPushReady && !this.state.ready ?  
        null :
        <OriginalComponent wonderPush={this.state.wp} {...this.props}/> 
    }
  }
  return WonderpushHOC;
}