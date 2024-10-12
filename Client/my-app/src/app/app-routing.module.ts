import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {FundraiserDetailComponent} from './fundraiser-detail/fundraiser-detail.component';
import {DonateComponent} from './donate/donate.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'search',component: SearchComponent},
  {path: 'fundraiser',component: FundraiserDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'donate',component: DonateComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
