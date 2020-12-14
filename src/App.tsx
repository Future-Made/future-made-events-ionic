import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar,IonTitle, IonThumbnail, IonButtons, IonButton,  // toolbar stuff
  IonHeader,
  IonContent,
  IonImg,
  IonItem
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, 
        gitPullRequestOutline, 
        square, triangle, 
        personCircle, search, 
        ellipsisVertical, ellipsisHorizontal,
        apertureOutline,
        contrastOutline,
        newspaperOutline

        } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import DemandUponListen from './pages/artistic_taste/musical/DemandUponListen';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */ 
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonHeader>

    <IonToolbar>
          <IonTitle >
                  <img src="https://i.imgur.com/RYgTGSr.png" width="64" height="64"/>
          </IonTitle>
  
            <IonButtons slot="secondary">
              <IonButton>
                <IonIcon slot="icon-only" icon={personCircle} />
              </IonButton>
              <IonButton>
                <IonIcon slot="icon-only" icon={search} />
              </IonButton>
            </IonButtons>
            <IonButtons slot="primary">
              <IonButton color="secondary">
                <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
              </IonButton>
            </IonButtons>
        </IonToolbar>
    </IonHeader>

    <IonContent>
    <IonReactRouter>
      <IonTabs>

        <IonRouterOutlet>
          <Route path="/demand_upon_listen" component={DemandUponListen} exact={true}/>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} />
          {/* <Route path="/" render={() => <Redirect to="/demand_upon_listen" />} exact={true} /> */}
          {/* <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} /> */}


        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={contrastOutline} />
            <IonLabel>discovery</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={apertureOutline} />
            <IonLabel>my demands</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>updates</IonLabel>
          </IonTabButton>
          <IonTabButton tab="demand_upon_listen" href="/demand_upon_listen">
            <IonIcon icon={gitPullRequestOutline}/>
            <IonLabel>
              upOnStream
            </IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    </IonContent>
    
  </IonApp>
);

export default App;
