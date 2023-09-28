import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { home, person, settings } from 'ionicons/icons';

export const Menu: React.FC = () => (
  <div>
    <p>Componente Menu</p>
    <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
        
    </ul>
    <a className="btn btn-primary" href="/" role="button">Link</a>
  </div>
);

