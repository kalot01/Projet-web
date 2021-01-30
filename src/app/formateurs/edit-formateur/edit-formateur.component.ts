import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeformateursService } from '../fakeformateurs.service';
import { Formateur } from '../formateur';

@Component({
  selector: 'app-edit-formateur',
  templateUrl: './edit-formateur.component.html',
  styleUrls: ['./edit-formateur.component.css']
})
export class EditFormateurComponent implements OnInit {
  id: number = 0;
  private sub: any;
  formateur: any;
  constructor(private route: ActivatedRoute, private formateurItemService: fakeformateursService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      });
      this.formateur = this.formateurItemService.getFormateur(this.id);
  }
  modifierformateur(formateuritem: Formateur) {
    console.log(formateuritem);
    }

}
