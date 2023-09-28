import React from 'react'
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
const ComputadoraPage:React.FC = ()=>  {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Computadora Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>¡Hola desde Computadora Page</p>
      </IonContent>
    </IonPage>
  )
}

export default ComputadoraPage