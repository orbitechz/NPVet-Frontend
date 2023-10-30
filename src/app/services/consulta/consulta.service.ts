import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Cons, Observable } from 'rxjs';
import { Consulta } from 'src/app/models/consulta/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  baseURL: string = 'http://localhost:8080/consulta'
  http = inject(HttpClient);


  constructor() { }

  getById(id: number): Observable<Consulta> {
    return this.http.get<Consulta>(`${this.baseURL}/${id}`);
  }

  getAll(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.baseURL}/all`)
  }

  getByAnimalNome(nome: string): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.baseURL}/animal/nome/${nome}`);
  }

  getByAnimalId(id: number): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.baseURL}/animal/id/${id}`);
  }

  getByVetNome(nome: string): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.baseURL}/veterinario/nome/${nome}`);
  }

  getByVetId(id: number): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.baseURL}/veterinario/id/${id}`);
  }

  getByAnamneseId(id: number): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.baseURL}/anamnese/${id}`);
  }

  getEmAndamento(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.baseURL}/em-andamento`);
  }

  getConcluida(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.baseURL}/concluida`);
  }

  getCanceladas(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.baseURL}/cancelada`)
  }

  getAgendada(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.baseURL}/agendada`)
  }
}
