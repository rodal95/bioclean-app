import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { library, search, cart , pricetags, cash} from 'ionicons/icons';
import Home from './Home';
import HomePage from './HomePage';
import RadioPage from './RadioPage';
import LibraryPage from './LibraryPage';

const TabMenu: React.FC = () => {

  return (
  <>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/tab-menu" to="/home" />
          <Route path="/" render={() => <Home />} exact={true} />
          <Route path="/home" render={() => <HomePage />} exact={true} />
          <Route path="/radio" render={() => <RadioPage />} exact={true} />
          <Route path="/library" render={() => <LibraryPage />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={pricetags} />
            <IonLabel>Productos</IonLabel>
          </IonTabButton>

          <IonTabButton tab="radio" href="/radio">
            <IonIcon icon={cart} />
            <IonLabel>Carrito</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/library">
            <IonIcon icon={cash} />
            <IonLabel>Pedidos</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </>
  );
};

export default TabMenu;