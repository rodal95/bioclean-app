import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import '@ionic/react/css/core.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import "bootstrap/dist/css/bootstrap.css";

/* Theme variables */
import './App.css';
import TabMenu from './pages/Tabs';
import ProductContainer from './pages/ProductContainer';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/tab-menu" component={()=> <TabMenu/>}/>
        <Route exact path="/productoDetail/:id" component={()=> <ProductContainer/>}/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
