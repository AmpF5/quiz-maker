import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacologyComponent } from './main-menu/pharmacology/pharmacology.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  {path: '', component: MainMenuComponent},
  {path: 'pharmacology', component: PharmacologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
