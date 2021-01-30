import { Component, OnInit } from '@angular/core';
import { fakeparticipantService } from '../fakeparticipants.service';
import { Participant } from '../participant';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {
  constructor(private participantfakeservice: fakeparticipantService) { }

  ngOnInit(): void {
  }
  addparticipant(participant: Participant) {
    console.log(participant);
    this.participantfakeservice.add(participant);
    }
}
