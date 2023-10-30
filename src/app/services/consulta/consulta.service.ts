import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from 'src/app/models/consulta/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  API: string = 'http://localhost:8080/consulta';
  http = inject(HttpClient);
  
  constructor() { }

  getConsultasByVeterinarioId(id:number): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(`${this.API}/veterinario/${id}`);
  }
}
