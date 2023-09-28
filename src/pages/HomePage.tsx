import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {Menu} from '../components/Menu';
export const HomePage: React.FC = () => (
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
            </IonContent>
        </IonPage>
    </>
);

