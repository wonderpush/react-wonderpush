import React,{Component} from 'react';
import WonderPush from './WonderPush';

export default function withWonderPush (OriginalComponent) {
  class WonderpushHOC extends Component {
    constructor(props){
      super(props)
      this.state = { 
        wp: null,
        ready: false
      }
    }

    componentDidMount(){
      WonderPush.ready( wp => {
        this.setState({
          wp,
          ready: true
        })
      })
    }

    render(){
      return this.state.ready ? 
        <OriginalComponent wp={this.state.wp} {...this.props}/> : 
        null
    }
  }
  return WonderpushHOC;
}