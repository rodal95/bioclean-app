import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonSelect, IonButton, IonList, IonItem, IonListHeader, IonRow, IonCol, IonSelectOption } from '@ionic/react';

import './Home.css';
import React from 'react';

const Home: React.FC = () => {


  const redirectToTabMenu = () => {
    window.location.href="/tab-menu";
  };

  return (
    <IonContent>
      <div>Bienvenido</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem consequatur sit commodi nulla! Veritatis
        adipisci doloribus eos necessitatibus assumenda consequatur voluptatibus velit, similique ipsam, optio quis
        soluta illo vero!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae veniam consequatur repellat consequuntur amet explicabo tempore reprehenderit quod? Aut placeat corporis expedita aliquam. Ipsum temporibus eaque deserunt aperiam minima.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus neque repudiandae iure quod sequi ducimus libero culpa quisquam, sapiente odit deleniti dolore tempore quo quibusdam adipisci ab dicta, id unde.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum nostrum hic recusandae soluta voluptate, in iure rem vero provident eaque eos alias. Fugiat ex reiciendis illum voluptatum minus modi!
      </p>
      <IonButton  onClick={redirectToTabMenu}>
        Ver Productos
      </IonButton>
    </IonContent>
  );
};

export default Home;
