import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AuthenticationService} from './authentication.service';
import {SharedService} from './shared.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {PreiseComponent} from './preise/preise.component';
import {ProfileComponent} from './profile/profile.component';
import {TaxiserviceComponent} from './taxiservice/taxiservice.component';

enableProdMode();
const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'profil', component: ProfileComponent},
  {path: 'taxiservice', component: TaxiserviceComponent},
  {path: 'preise', component: PreiseComponent},
  {path: 'kontakt', component: KontaktComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    KontaktComponent,
    PreiseComponent,
    ProfileComponent,
    TaxiserviceComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [AuthenticationService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
