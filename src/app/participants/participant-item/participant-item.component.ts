import { Component,Input, OnInit } from '@angular/core';
import { fakeparticipantService } from '../fakeparticipants.service';

@Component({
  selector: 'app-participant-item',
  templateUrl: './participant-item.component.html',
  styleUrls: ['./participant-item.component.css']
})
export class ParticipantItemComponent implements OnInit {
  @Input() participant: any;
  constructor(private participantItemService: fakeparticipantService) { }

  ngOnInit(): void {
  }
  onDelete()
  {
  this.participantItemService.delete(this.participant);
  }

}
