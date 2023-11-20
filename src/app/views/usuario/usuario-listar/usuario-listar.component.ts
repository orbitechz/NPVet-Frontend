import { Component } from '@angular/core';
import { Header } from 'src/app/components/table/header';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.scss']
})
export class UsuarioListarComponent {
  isErro!: boolean
  mensagem!: string

  // Table Configuarations
  apiUrlPath(){
    return `${environment.apiUrl}/usuario`;  
  }
  callHeaders(){
    let tableHeaders : Header[] = [];
    tableHeaders.push(new Header('Nome', 'nome'));
    tableHeaders.push(new Header('Username', 'username')); 
    tableHeaders.push(new Header('CPF', 'cpf'));
    tableHeaders.push(new Header('Tipo Usuario','tipoUsuario'));   
    return tableHeaders;
  }
}
