import React from 'react'
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
const ArmaduraPage:React.FC = ()=>  {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Armadura Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>¡Hola desde Armadura Page</p>
      </IonContent>
    </IonPage>
  )
}

export default ArmaduraPage