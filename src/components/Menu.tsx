import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
function Menu() {
  return (
    <>
        <IonMenu contentId="menu-content">
        <IonContent className="ion-padding-menu">This is the menu content.
        </IonContent>
        </IonMenu>
        <IonPage id="menu-content">
            <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
                </IonButtons>
            </IonToolbar>
            </IonHeader>
        </IonPage>
    </>
  );
}
export default Menu;