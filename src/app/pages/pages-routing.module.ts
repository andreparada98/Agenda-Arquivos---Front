import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '', component: PagesComponent,
  children: [
    {
      path:'home-page',
      loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home-page',
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
