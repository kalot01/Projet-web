import { Component, OnInit } from '@angular/core';
import { fakeparticipantService } from '../../fakeparticipants.service';
import { Participant } from '../../participant';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  participantItems: Participant[] | undefined;
  constructor(private particpantItemService: fakeparticipantService) { }

  ngOnInit(): void {
    this.participantItems = this.particpantItemService.get();
    console.log(this.participantItems);
  }
  refresh(): void {
    window.location.reload();
  }

}
