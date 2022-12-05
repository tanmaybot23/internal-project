import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './content/form/form.component';
import { TableComponent } from './content/table/table.component';
import { ContentTranComponent } from './content-tran/content-tran.component';
import { TransactionTableComponent } from './content-tran/transaction-table/transaction-table.component';
import { TransactionFormComponent } from './content-tran/transaction-form/transaction-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FormComponent,
    TableComponent,
    ContentTranComponent,
    TransactionTableComponent,
    TransactionFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
