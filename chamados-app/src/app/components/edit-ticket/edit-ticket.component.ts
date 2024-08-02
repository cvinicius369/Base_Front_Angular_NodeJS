import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  ticket = { title: '', description: '' };
  id: string;

  constructor(private route: ActivatedRoute, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ticketService.getTicketById(this.id).subscribe(response => {
      this.ticket = response;
    });
  }

  editTicket() {
    this.ticketService.editTicket(this.id, this.ticket).subscribe(response => {
      console.log('Chamado editado com sucesso', response);
    });
  }
}
