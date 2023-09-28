import React from 'react'
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
const PerroPage:React.FC = ()=>  {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perro Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>¡Hola desde Perro Page</p>
      </IonContent>
    </IonPage>
  )
}

export default PerroPage