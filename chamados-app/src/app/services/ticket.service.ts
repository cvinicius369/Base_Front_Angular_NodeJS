import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://api.esferasolutions.com.br/#238f8e42-f8e7-47a9-8e25-2c958e973281';  // URL base do backend
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient) { }

  // Criar Chamado
  createTicket(ticket: any): Observable<any> {
    return this.http.post(`${API_URL}/tickets`, ticket, httpOptions);
  }

// Editar Chamado
editTicket(id: string, ticket: any): Observable<any> {
  return this.http.put(`${API_URL}/tickets/${id}`, ticket, httpOptions);
}

// Listar Chamados
getTickets(): Observable<any> {
  return this.http.get(`${API_URL}/tickets`, httpOptions);
}

// Visualizar Chamado
getTicketById(id: string): Observable<any> {
  return this.http.get(`${API_URL}/tickets/${id}`, httpOptions);
}

// Upload de Arquivo
uploadFile(id: string, file: File): Observable<any> {
  const formData: FormData = new FormData();
  formData.append('file', file, file.name);
  return this.http.post(`${API_URL}/tickets/${id}/upload`, formData);
}

// Download de Arquivo
downloadFile(id: string, fileName: string): Observable<Blob> {
  return this.http.get(`${API_URL}/tickets/${id}/download/${fileName}`, { responseType: 'blob' });
}
}
