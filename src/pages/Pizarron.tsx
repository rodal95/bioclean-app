import React from 'react'
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
const PizarronPage:React.FC = ()=>  {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pizarron Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>¡Hola desde Pizarron Page</p>
      </IonContent>
    </IonPage>
  )
}

export default PizarronPage