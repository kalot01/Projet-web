import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeparticipantService } from '../fakeparticipants.service';
import { Participant } from '../participant';
@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {
  id: number = 0;
  private sub: any;
  participant: any;
  constructor(private route: ActivatedRoute, private participantItemService: fakeparticipantService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      });
      this.participant = this.participantItemService.getParticipant(this.id);
  }
  modifierparticipant(participantitem: Participant) {
    console.log(participantitem);
    }

}
