import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RagistrationComponent } from './ragistration/ragistration.component';

const routes: Routes = [{
  path:'', component:DashbordComponent
},
{path:'ragistration',component:RagistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
