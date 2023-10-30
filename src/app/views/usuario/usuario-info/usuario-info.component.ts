import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';
import { Header } from 'src/app/components/table/header';
import { Consulta } from 'src/app/models/consulta/consulta';
import { Usuario } from 'src/app/models/usuario/usuario';
import { ConsultaService } from 'src/app/services/consulta/consulta.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario-info',
  templateUrl: './usuario-info.component.html',
  styleUrls: ['./usuario-info.component.scss'],
  providers: [provideNgxMask()],
})
export class UsuarioInfoComponent implements OnInit {
  usuario = new Usuario();
  data: any[] = [];
  hide = true;
  isErro!: boolean
  mensagem!: string
  title = 'Consulta';


  constructor(private uService: UsuarioService,
     private router: Router,
     private route: ActivatedRoute,
     private cService: ConsultaService) {}

  ngOnInit(): void {
    this.fetchUsuario();
    this.fetchConsultas();
  }

  fetchConsultas() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.cService.getConsultasByVeterinarioId(id).subscribe({
        next: (c) => {
          this.data = c;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  fetchUsuario() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.uService.getById(id).subscribe({
        next: (u) => {
          this.usuario = u;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  apiUrlPath() {
    return 'http://localhost:8080/consulta';
  }

  callHeaders() {
    let tableHeaders: Header[] = [];
    tableHeaders.push(new Header('Data', 'data'));
    tableHeaders.push(new Header('Status', 'status'));
    tableHeaders.push(new Header('Animal', 'animal.nome'));
    tableHeaders.push(new Header('Tutor', 'tutor.nome'));
    return tableHeaders;
  }
  
}
