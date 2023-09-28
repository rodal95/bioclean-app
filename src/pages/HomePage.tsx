import React from 'react';
import { IonButton, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {Menu} from '../components/Menu';
 const HomePage: React.FC = () => {
    const salir = () => {
        window.location.href="/";
      };
    return (
    <>
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Listen</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <p>¡Hola desde mi página en Ionic React!</p>
                <Menu/>
                <IonButton  onClick={salir}>
                Salir
                </IonButton>
            </IonContent>
        </IonPage>
    </>)
};
export default HomePage

