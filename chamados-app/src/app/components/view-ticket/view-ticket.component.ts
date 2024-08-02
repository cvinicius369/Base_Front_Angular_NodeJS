import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  ticket: any;
  id: string;
  selectedFile: File;

  constructor(private route: ActivatedRoute, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ticketService.getTicketById(this.id).subscribe(response => {
      this.ticket = response;
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    this.ticketService.uploadFile(this.id, this.selectedFile).subscribe(response => {
      console.log('Arquivo enviado com sucesso', response);
    });
  }

  downloadFile(fileName: string) {
    this.ticketService.downloadFile(this.id, fileName).subscribe(response => {
      const url = window.URL.createObjectURL(response);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
    });
  }
}
