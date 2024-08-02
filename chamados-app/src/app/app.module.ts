import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { EditTicketComponent } from './components/edit-ticket/edit-ticket.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent,
    EditTicketComponent,
    TicketListComponent,
    ViewTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
