import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserViewComponent } from './components/user-view/user-view.component';

const routes: Routes = [
  { path:"", pathMatch:'full', redirectTo: "/home"},
  { path: "home", component: HomeComponent},
  { path: "user/:userId", component: UserViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
