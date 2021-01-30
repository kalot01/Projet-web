import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormateurComponent } from './formateurs/formateur.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { RouterModule, Routes } from '@angular/router';
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component';
import { FormateurItemComponent } from './formateur-item/formateur-item.component';

// const FormateurRoutes: Routes = [
//   {
//   path: '',
//   component: FormateurComponent,
//   children: [{ path: 'addformateur', component: AddFormateurComponent },
//   { path: '', redirectTo: 'addformateur', pathMatch: 'full' }
//   ]
//   }
//   ];


@NgModule({
  declarations: [FormateurComponent, AddFormateurComponent, FormateurItemComponent],
  // imports: [RouterModule.forChild(FormateurRoutes),
  imports: [CommonModule,
 
  ],
  bootstrap: [FormateurComponent]
})
export class FormateurModule { }






