import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {
  ticket = { title: '', description: '' };

  constructor(private ticketService: TicketService) { }

  createTicket() {
    this.ticketService.createTicket(this.ticket).subscribe(response => {
      console.log('Chamado criado com sucesso', response);
    });
  }
}
