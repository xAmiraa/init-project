import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthRoutingModule } from './modules/Auth/auth-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, //Default path
  { path: 'Home', component: HomeComponent },
  {
    path: 'User',
    loadChildren: () =>
      import('./modules/Auth/auth.module').then((m) => m.AuthModule),
  },

  { path: '**', component: NotFoundComponent }, //Wildcard path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
