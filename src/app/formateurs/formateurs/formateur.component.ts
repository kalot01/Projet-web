import { Component, OnInit } from '@angular/core';
import { fakeformateursService } from '../fakeformateurs.service';
import { Formateur } from '../formateur';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css'],
  providers : [fakeformateursService]
})
export class FormateurComponent implements OnInit {
  formateurItems: Formateur[] | undefined;
  constructor(private formateurItemService: fakeformateursService) { }

  ngOnInit(): void {
    this.formateurItems = this.formateurItemService.get();
    console.log(this.formateurItems);
  }
  refresh(): void {
    window.location.reload();
  }

}
