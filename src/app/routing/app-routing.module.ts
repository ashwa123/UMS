import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../features/Login/login.component';
import { EditUserComponent } from '../features/User/edit-user/edit-user.component';
import { UserDetailComponent } from '../features/User/user-detail/user-detail.component';
import { AuthGuard } from '../core/Auth/auth.guard';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'edituser', component: EditUserComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
