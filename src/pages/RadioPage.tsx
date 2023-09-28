import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
const RadioPage:React.FC = () => {
  return(
  <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Radio</IonTitle>
        </IonToolbar>
        <Header/>
      </IonHeader>
      
      <IonContent>
        <p>¡Hola desde mi página en Ionic React! Radio</p>
      </IonContent>
      
    </IonPage>
  </>)
};

export default RadioPage;