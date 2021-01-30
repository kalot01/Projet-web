import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormateurComponent } from './formateurs/formateurs/formateur.component';
import { AddFormateurComponent } from './formateurs/add-formateur/add-formateur.component';
import { EditFormateurComponent } from './formateurs/edit-formateur/edit-formateur.component';
import {FormateurItemComponent} from "./formateurs/formateur-item/formateur-item.component";
import { FormsModule, NgForm } from '@angular/forms';
import { ParticipantComponent } from './participants/participants/participant/participant.component';
import { ParticipantItemComponent } from './participants/participant-item/participant-item.component';
import { AddParticipantComponent } from './participants/add-participant/add-participant.component';
import { EditParticipantComponent } from './participants/edit-participant/edit-participant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RechercheSessionComponent } from './recherche-session/recherche-session.component';



const appRoutes: Routes = [
  {
  path: 'list',
  component: SessionItemListComponent},
  {
    path: 'rechercher',
    component: RechercheSessionComponent},
  {
    path: 'dashboard',
    component: DashboardComponent},
  {
    path: 'formateur',
    component: FormateurComponent
  },
  {
    path: 'participant',
    component: ParticipantComponent
  },
  { path: 'participant/addparticipant', component: AddParticipantComponent },
  { path: 'participant/edit/:id', component: EditParticipantComponent },
  { path: 'formateur/addformateur', component: AddFormateurComponent },
  { path: 'formateur/edit/:id', component: EditFormateurComponent },
  {
  path: 'admin',
  loadChildren: './admin/admin.module#AdminModule'
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
  ];
@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    PagenotfoundComponent,
    NavComponent,
    FormateurComponent,
    AddFormateurComponent,
    EditFormateurComponent,
    FormateurItemComponent,
    ParticipantComponent,
    ParticipantItemComponent,
    AddParticipantComponent,
    EditParticipantComponent,
    DashboardComponent,
    RechercheSessionComponent,

    
   
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
