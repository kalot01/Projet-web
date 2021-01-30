import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../admin/fakesessionitem.service';

@Component({
  selector: 'app-recherche-session',
  templateUrl: './recherche-session.component.html',
  styleUrls: ['./recherche-session.component.css']
})
export class RechercheSessionComponent implements OnInit {
  id: number = 0;
  private sub: any;
  session:any;
  sessions : any;
  constructor(private sessionItemService: FakesessionitemService) { }

  ngOnInit(): void {
    console.log('Session ID ' + this.id.toString());
    this.sessions = this.sessionItemService.get();
    
  }
  getSession(id: number) {
    this.session = this.sessions[id -1];
    console.log(this.session);
  }

}
