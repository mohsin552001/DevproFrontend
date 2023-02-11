import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
 import { DetailpageComponent } from './detailpage/detailpage.component';

const routes: Routes = [{
   path:'',component:HomeComponent
}
,{path:'detail/:id',component:DetailpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
