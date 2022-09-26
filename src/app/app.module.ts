import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { ReusableTableComponent } from './shared-components/reusable-table/reusable-table.component';
import { ReusableLoadingComponent } from './shared-components/reusable-loading/reusable-loading.component';
import { EditCustomerModalComponent } from './modals/edit-customer-modal/edit-customer-modal.component';
import { MyHotelNavbarComponent } from './shared-components/my-hotel-navbar/my-hotel-navbar.component';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { FormEditCustomerComponent } from './shared-components/form-edit-customer/form-edit-customer.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

// ngrx
import { CounterAppComponent } from './counter-app/counter-app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter-app/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterChildComponent } from './counter-app/counter-child/counter-child.component';
import { CounterGrandchildComponent } from './counter-app/counter-grandchild/counter-grandchild.component';
import { WelcomeDateComponent } from './shared-components/welcome-date/welcome-date.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReusableTableComponent,
    ReusableLoadingComponent,
    EditCustomerModalComponent,
    MyHotelNavbarComponent,
    CustomersListComponent,
    CustomerEditComponent,
    FormEditCustomerComponent,
    CapitalizadoPipe,
    CounterAppComponent,
    CounterChildComponent,
    CounterGrandchildComponent,
    WelcomeDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    CdkTableModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
