import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const SearchPage:React.FC = () => (
  <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>¡Hola desde mi página en Ionic React! Search</p>
      </IonContent>
    </IonPage>
  </>
);

export default SearchPage;