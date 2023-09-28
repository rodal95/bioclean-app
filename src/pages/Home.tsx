import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';


import './Home.css';

  const Home: React.FC = () => {
    const history = useHistory();
  
    const redirectToTabMenu = () => {
      history.push('/tab-menu');
    };
  
    return (
      <IonContent>
        <div>Bienvenido</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem consequatur sit commodi nulla! Veritatis adipisci doloribus eos necessitatibus assumenda consequatur voluptatibus velit, similique ipsam, optio quis soluta illo vero!</p>
        <IonButton expand="full" onClick={redirectToTabMenu}>
          Ir al menú de tabs
        </IonButton>
      </IonContent>
    );
  };


export default Home;
