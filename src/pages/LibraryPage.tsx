import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Footer } from '../components/Footer';
const LibraryPage:React.FC = () => (
  <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Library</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Footer/>
      </IonContent>
      
    </IonPage>
  </>
);

export default LibraryPage;