import { Component,Input, OnInit } from '@angular/core';
import { fakeformateursService } from '../fakeformateurs.service';

@Component({
  selector: 'app-formateur-item',
  templateUrl: './formateur-item.component.html',
  styleUrls: ['./formateur-item.component.css']
})
export class FormateurItemComponent implements OnInit {
  @Input() formateur: any;
  constructor(private formateurItemService: fakeformateursService) { }


  ngOnInit(): void {
  }
  onDelete()
  {
this.formateurItemService.delete(this.formateur);
  }

}
