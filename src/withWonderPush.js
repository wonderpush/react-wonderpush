import React,{Component} from 'react';

export default function withWonderPush (OriginalComponent) {
  class WonderpushHOC extends Component {
    render(){
      return <OriginalComponent {...this.props}/>
    }
  }
  return WonderpushHOC;
}