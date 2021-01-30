import { Injectable } from '@angular/core';
import {Participant} from "./participant";
import { PARTICIPANTSITEMS } from './participants';


@Injectable({
  providedIn: 'root'
})
export class fakeparticipantService {

  constructor() { }
  get() {return PARTICIPANTSITEMS;}
  add(participantItem: Participant) {
    participantItem.id = PARTICIPANTSITEMS.length + 1;
    PARTICIPANTSITEMS.push(participantItem);    
  }

  delete(participantItem: Participant) {
    let index;
    index = PARTICIPANTSITEMS.indexOf(participantItem);
    if (PARTICIPANTSITEMS.indexOf(participantItem) >= 0) {
        PARTICIPANTSITEMS.splice(index, 1);
    }
  }
  getParticipant(id: number){
    return PARTICIPANTSITEMS[id - 1];
  }
}

