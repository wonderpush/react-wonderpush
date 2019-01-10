import React,{Component} from 'react';
import WonderPush from './WonderPush';

export default function withWonderPush (OriginalComponent) {
  class WonderpushHOC extends Component {
    constructor(props){
      super(props)
      this.state = { 
        wp: 'not ready',
      }
    }

    componentDidMount(){
      WonderPush.ready( wp => { this.setState({wp}) })
    }

    render(){
      return this.state.wp == 'not ready' ? 
        null :
        <OriginalComponent wp={this.state.wp} {...this.props}/> 
        
    }
  }
  return WonderpushHOC;
}