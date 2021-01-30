import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../admin/fakesessionitem.service';
import { Session } from '../admin/session';
import { SessionItemListComponent } from '../admin/session-item-list/session-item-list.component';
import { fakeformateursService } from '../formateurs/fakeformateurs.service';
import { Formateur } from '../formateurs/formateur';
import { fakeparticipantService } from '../participants/fakeparticipants.service';
import { Participant } from '../participants/participant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sessionItems: any;
  participantItems : any;
  formateurItems : any;
  taille : any;
  tailleParticipants : any;
  tailleFormateurs : any;
  constructor(private formateurItemsService : fakeformateursService, private sessionItemService: FakesessionitemService, private participantItemService: fakeparticipantService) { }
  Tranks : any ;
  nbresession : any;
  ngOnInit(): void {
    
    this.sessionItems= this.sessionItemService.get();
    this.taille = this.sessionItems.length;
    this.nbresession = [];
    for (let i =0; i < 9; i++){
      this.nbresession.push(0);
    }  

    for (let i = 0; i < this.taille; i++) {
      switch(this.sessionItems[i].track) { 
      case "MEAN": { 
        this.nbresession[0] ++;
         break; 
      } 
      case "Ionic": { 
        this.nbresession[1] ++;
         break; 
      } 
      case "NodeJS": { 
        this.nbresession[2] ++;
         break; 
      } 
      case "Angular": { 
        this.nbresession[3] ++;
         break; 
      } 
      case "Swift": { 
        this.nbresession[4] ++;
         break; 
      } 
      case "Symphony": { 
        this.nbresession[5] ++;
         break; 
      } 
      case "Laravel": { 
        this.nbresession[6] ++;
         break; 
      } 
      case "Android": { 
        this.nbresession[7] ++;
         break; 
      } 
      case "Xamarin": { 
        this.nbresession[8] ++;
         break; 
      }
      default: { 
         console.log("DATA NOT FOUND !!!");
         break; 
      } 
   }

    }


  
  



    this.participantItems = this.participantItemService.get();
    this.tailleParticipants = this.participantItems.length;

    this.formateurItems = this.formateurItemsService.get();
    this.tailleFormateurs = this.formateurItems.length;


   
  }

 

}
