import React,{Component} from 'react';
import WonderPush from './WonderPush';

/* 
  Un provider pour initialiser WonderPush
  Etape obligatoire.
  Par intuition on aurait aimé que s'y trouve également le .ready() et la transmission de wonderpush,
  on aurait récupéré l'objet par consumer.
  Mais pour éviter de bloquer toute l'application de l'utilisateur, il faut séparer les deux,
  l'init a lieu au démarrage de l'appli,
  le ready sera vérifié pour chaque composant nécessitant l'utilisation de wonderpush.
*/ 

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
