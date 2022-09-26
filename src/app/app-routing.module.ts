import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'customer-list', component: CustomersListComponent },
  { path: 'customer-edit', component: CustomerEditComponent },
  { path: 'counter-app', component: CounterAppComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
