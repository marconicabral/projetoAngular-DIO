import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { HinoComponent } from './pages/hino/hino'
import { TitulosComponent } from './pages/titulos/titulos.component';
import { LojaoficialComponent } from './pages/lojaoficial/lojaoficial.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'historia',
    component:ContentComponent
  },
  {
    path: 'hino',
    component:HinoComponent
  },
  {
    path: 'titulos',
    component:TitulosComponent
  },
  {
    path: 'lojaoficial',
    component:LojaoficialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
