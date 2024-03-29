import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternFormComponent } from './home/intern-form/intern-form.component';
import { PoeHomeComponent } from './poe/poe-home/poe-home.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full' 
  },
  {
    path:"home",
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:"intern-add",
    component: InternFormComponent,
    pathMatch:"full"
  },

  {
    path:"poe-home",
    component: PoeHomeComponent,
    pathMatch: "full"
  },
  //! Pour rediriger vers home qui remplace nimporte quel redirection, si l'user essaye de faire un / qqchose
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
