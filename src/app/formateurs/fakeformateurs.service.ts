import { Injectable } from '@angular/core';
import {Formateur} from "./formateur";
import { FORMATEURSITEMS } from './formateurs';


@Injectable({
  providedIn: 'root'
})
export class fakeformateursService {

  constructor() { }
  get() {return FORMATEURSITEMS;}
  add(formateurItem: Formateur) {
    formateurItem.id = FORMATEURSITEMS.length + 1;
    FORMATEURSITEMS.push(formateurItem);    
  }

  delete(formateurItem: Formateur) {
    let index;
    index = FORMATEURSITEMS.indexOf(formateurItem);
    if (FORMATEURSITEMS.indexOf(formateurItem) >= 0) {
      FORMATEURSITEMS.splice(index, 1);
    }
  }
  getFormateur(id: number){
    return FORMATEURSITEMS[id - 1];
  }
}

