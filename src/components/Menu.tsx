import React from 'react';
import { IonButton  } from '@ionic/react';


export const Menu: React.FC = () => {
  const redirectToTabMenu = () => {
    window.location.href="/external";
  };
  return(
  <div>
    <p>Componente Menu</p>
    <ul className="list-group">
        <ul>
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </ul>
    <IonButton onClick={redirectToTabMenu}>External page</IonButton>

  </div>
  )
};

