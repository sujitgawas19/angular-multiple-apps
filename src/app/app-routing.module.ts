import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { App1SharedModule } from "../../projects/kss-widget/src/app/app.module";

const routes: Routes = [
	 { path: 'newhome',  loadChildren: './home/home.module#HomeModule'},
	 // { path: 'app1', loadChildren: '../../projects/kss-widget/src/app/app.module#App1SharedModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  			// App1SharedModule.forRoot()
  		],
  exports: [RouterModule]
})
export class AppRoutingModule { }
