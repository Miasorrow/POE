import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
