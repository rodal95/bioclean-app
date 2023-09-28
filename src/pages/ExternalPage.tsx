import React from 'react'
import { IonButton, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
const ExternalPage:React.FC = ()=>  {
  const redirectToTabMenu = () => {
    window.location.href="/tab-menu";
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>External Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>¡Hola desde mi página en Ionic React!</p>
        <IonButton  onClick={redirectToTabMenu}>
        Volver al menú de tabs
      </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default ExternalPage
  