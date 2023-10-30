import { Component, Input, OnInit } from '@angular/core';
import { Header } from 'src/app/components/table/header';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {
  filteredData: Usuario[] = [];
  @Input() isModal = false
  isErro!: boolean
  mensagem!: string
  title = 'Usuario';
  usuarios: Usuario[] = [];
  data: any[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe((response: Usuario[]) => {
      this.data = response;
      this.filteredData = [...response];
    });
  }

  filterData(searchTerm: string): void {
    if (!searchTerm.trim()) {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(usuario => {
        return (
          usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          usuario.cpf.includes(searchTerm) ||
          usuario.username.toLowerCase().includes(searchTerm.toLowerCase()));
      });
    }
  }

  apiUrlPath() {
    return 'http://localhost:8080/usuario';
  }

  callHeaders() {
    let tableHeaders: Header[] = [];
    tableHeaders.push(new Header('Nome', 'nome'));
    tableHeaders.push(new Header('CPF', 'cpf'));
    tableHeaders.push(new Header('Username', 'username'));
    tableHeaders.push(new Header('Tipo de Usuário', 'tipoUsuario'));
    return tableHeaders;
  }
}
