import React from 'react';
import { IonList, IonItemSliding, 
        IonItem, IonLabel, IonItemOptions, 
        IonItemOption, IonIcon, IonNote,
        IonChip,
        IonPage, 
        IonHeader, 
        IonContent, 
        IonToolbar, 
        IonTitle,
        IonThumbnail,
      
        IonGrid,
        IonRow,
        IonCardContent,
        IonCol,
        IonImg,
        IonText
} from '@ionic/react';

import { heart, trash, star, 
    archive, ellipsisHorizontal, 
    ellipsisVertical, close, pin, 
    musicalNoteOutline,
    personCircle,
    search,
    home,
    contractOutline,
    apertureOutline,
    cropOutline,
    playCircleOutline,
    returnUpBackOutline,
    navigateCircleOutline
} from 'ionicons/icons';

const DemandUponListen: React.FC = () => (

  <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">
            <IonLabel>Event UpOnStream</IonLabel>
          </IonTitle>
        </IonToolbar>
       
      </IonHeader>
      
    <IonContent fullscreen>
      <IonList>
      
      {/* Multi-line sliding item with icon options on both sides */}
      <IonItemSliding id="item100">
        <IonItem href="#">
          {/* <IonLabel> */}
          <IonGrid>
            <IonRow>
            <IonCol size="12">
                 
                  <IonCol>
                    <IonIcon slot="icon-only" icon={playCircleOutline} />
                  </IonCol>

                  <IonCol>
                    <IonLabel>
                        <img src="https://i.imgur.com/aIbOT7d.png" width="56" height="56"/>
                      </IonLabel>
                  </IonCol>

                  <IonCol>
                    <IonItem>
                      <IonLabel>
                      <h2>Leyla</h2>
                      <p>by Altın Gün</p>
                      </IonLabel>

                      <IonIcon icon={returnUpBackOutline} slot="end"/>  

                    </IonItem>
                 

                    <IonItem>
                      <IonNote color="warning">{'>> '}</IonNote>
                      <IonNote color="warning">AnatolianRock</IonNote>
                      <IonNote color="danger">TurkishPsychedelicFolk</IonNote>
                    </IonItem>

                  </IonCol> 

                             
            </IonCol>
           </IonRow>
          </IonGrid>
          {/* </IonLabel> */}


        </IonItem>
    
        <IonItemOptions side="start">
          <IonItemOption color="dark">
            <IonIcon icon={cropOutline} slot="end"/>
            <IonLabel>incentivise</IonLabel>
            {/* <IonIcon slot="icon-only" icon={heart} /> */}
          </IonItemOption>
        </IonItemOptions>
    
        <IonItemOptions side="end">
          <IonItemOption color="warning">
              <IonLabel slot="end">regular</IonLabel>
              <IonIcon slot="icon-only" icon={navigateCircleOutline}/>

            </IonItemOption>
          <IonItemOption color="success">
            <img width="60" height="60"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Chaos_Computer_Club_%28logo%29.svg/1200px-Chaos_Computer_Club_%28logo%29.svg.png" 
              />
            <IonLabel slot="end">online</IonLabel>
    
          </IonItemOption>
        </IonItemOptions> 
      </IonItemSliding>

      <IonItemSliding>
        <IonItem href="#">
          <IonLabel>
        
            <IonGrid>
              <IonRow>
              <IonCol size="12">
                  
                    <IonCol>
                      <IonIcon slot="icon-only" icon={playCircleOutline} />
                    </IonCol>

                    <IonCol>
                 
                      <IonItem>

                        <IonLabel>
                        <img src="https://i.imgur.com/rQhKXGl.jpg" width="62" height="62"/>                    
                        <h2>Money</h2>
                        <p>by Pink Floyd</p>
                        </IonLabel>

                        <IonIcon icon={returnUpBackOutline} slot="end"/>  

                      </IonItem>

                    <IonItem>
                      <IonNote color="warning">{'>>'}</IonNote>
                      <IonNote color="warning">Rock</IonNote>

                      <IonNote color="danger">ProgressiveRock</IonNote>
                      <IonNote color="primary">ArtRock </IonNote>
                    </IonItem>
                    
                    </IonCol>

                  
              </IonCol>
                
            
              </IonRow>
            </IonGrid>
          </IonLabel>
        </IonItem>
        <IonItemOptions side="start">
          <IonItemOption color="dark">
            <IonIcon icon={cropOutline} slot="start"/>
            <IonLabel>incentivise</IonLabel>
            {/* <IonIcon slot="icon-only" icon={heart} /> */}
          </IonItemOption>
        </IonItemOptions>
    
        <IonItemOptions side="end">
          <IonItemOption color="warning">
            <IonLabel slot="end">regular</IonLabel>
            <IonIcon slot="icon-only" icon={navigateCircleOutline}/>
          </IonItemOption>
            
          <IonItemOption color="success">
            <img width="60" height="60"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Chaos_Computer_Club_%28logo%29.svg/1200px-Chaos_Computer_Club_%28logo%29.svg.png" 
              />
            <IonLabel slot="end">online</IonLabel>
          </IonItemOption>
        </IonItemOptions> 

      </IonItemSliding>

      <IonItemSliding>

        {/* TODO:// When item is clicked, it should go to the song/album. */}
        <IonItem href="#">
          <IonLabel>
        
          <IonGrid>
            <IonRow>
            <IonCol size="12">
                  <IonCol>
                    <IonIcon slot="icon-only" icon={playCircleOutline} />
                  </IonCol>

                  <IonCol>
                    <IonItem>
                      <IonIcon icon={returnUpBackOutline} slot="end"/>  
  
                      <IonLabel>
                        <img src="https://i.imgur.com/2V5Q4vn.jpg" width="62" height="62"/>                    
                        <h2>Boşluk</h2>
                        <p>by Büyük Ev Ablukada</p>
                      </IonLabel>
                    </IonItem>      



                    <IonItem>
                <IonNote color="warning">{'>>'}</IonNote>
                <IonNote color="warning"> AlternativeRock</IonNote>
                <IonNote color="primary">IndieRock</IonNote>
                <IonNote color="danger">PsychedelicRock</IonNote>
              </IonItem>
                  </IonCol>

                
            </IonCol>
            
     
          </IonRow>

        </IonGrid>
          </IonLabel>
        </IonItem>

     
    
        <IonItemOptions side="start">
          <IonItemOption color="dark">
            <IonIcon icon={cropOutline} slot="start"/>

            <IonText>
            incentivise            
            </IonText>
            {/* <IonLabel color="danger">
           
              </IonLabel> */}
            {/* <IonIcon slot="icon-only" icon={heart} /> */}
          </IonItemOption>
        </IonItemOptions>
    
        <IonItemOptions side="end">
          <IonItemOption color="warning">
          <IonLabel slot="end">regular</IonLabel>
          <IonIcon slot="icon-only" icon={navigateCircleOutline}/>

            </IonItemOption>
          <IonItemOption color="success">
          
            <img width="60" height="60"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Chaos_Computer_Club_%28logo%29.svg/1200px-Chaos_Computer_Club_%28logo%29.svg.png" 
              />
            <IonLabel slot="end">online</IonLabel>
    
          </IonItemOption>
        </IonItemOptions> 
      </IonItemSliding>
    </IonList>

   </IonContent>
  </IonPage>



    );
    
    export default DemandUponListen;