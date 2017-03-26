import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';

const routes: Routes = [
    { path: 'home', component: PrivateComponent },
    { path: 'login', component: LoginComponent }, 
    { path: '', redirectTo: 'home', pathMatch: 'full' }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
