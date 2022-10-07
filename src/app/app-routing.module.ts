import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  {
    // component: AppComponent,
    // canActivate: [AuthGuard],
      // { path: '', redirectTo: '/customers', pathMatch: 'full' },
        path: 'customers',
        loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
