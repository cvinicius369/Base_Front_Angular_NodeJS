import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { EditTicketComponent } from './components/edit-ticket/edit-ticket.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';

const routes: Routes = [
  { path: 'create-ticket', component: CreateTicketComponent },
  { path: 'edit-ticket/:id', component: EditTicketComponent },
  { path: 'tickets', component: TicketListComponent },
  { path: 'view-ticket/:id', component: ViewTicketComponent },
  { path: '', redirectTo: '/tickets', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
