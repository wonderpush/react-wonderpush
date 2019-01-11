import React,{Component} from 'react';
import WonderPush from './WonderPush';

/* 
  Un high order pour vérifier l'état de l'objet wonderpush et le fournir aux élements enfants.
  Par sécurité, on devrait envisager l'exécution d'un setTimeOut sur le ready pour ne pas bloquer l'affichage de composants
  si wonderpush n'est jamais ready.
*/ 

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