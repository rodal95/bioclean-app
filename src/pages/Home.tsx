import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
<<<<<<< HEAD
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
=======
import ExploreContainer from '../components/ExploreContainer';
import CardContainer from '../components/cardContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>hola</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">hola</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <CardContainer />
>>>>>>> 03382ee0fcf0df880bffb55f46ddbd6af95ced3b
      </IonContent>
    );
  };


export default Home;
