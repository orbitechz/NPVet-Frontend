import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorListComponent } from './views/tutor/tutor-list/tutor-list.component';
import { TutorDetailsComponent } from './views/tutor/tutor-details/tutor-details.component';
import { UsuarioListarComponent } from './views/usuario/usuario-listar/usuario-listar.component';
import { UsuarioDetailsComponent } from './views/usuario/usuario-details/usuario-details.component';
import { UsuarioEditComponent } from './views/usuario/usuario-edit/usuario-edit.component';
import { AnimalListComponent } from './views/animal/animal-list/animal-list.component';
import { AnimalDetailsComponent } from './views/animal/animal-details/animal-details.component';
import { ConsultaListComponent } from './views/consulta/consulta-list/consulta-list.component';
import { IndexComponent } from './core/index/index.component';
import { ConsultaAnamneseDetailsComponent } from './views/anamnese/consulta-anamnese-details/consulta-anamnese-details.component';
import { ExameListComponent } from './views/exame-fisico/exame-list/exame-list.component';
import { ExameDetailsComponent } from './views/exame-fisico/exame-details/exame-details.component';
 

const routes: Routes = [
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  {
    path: 'web',
    component: IndexComponent,
    children: [
      { path: 'tutores', component: TutorListComponent },
      { path: 'tutor/register', component: TutorDetailsComponent },
      { path: 'tutor/edit/:id', component: TutorDetailsComponent },
      { path: 'tutor/:id', component: TutorDetailsComponent },
      { path: 'usuarios', component: UsuarioListarComponent },
      { path: 'usuario/register', component: UsuarioDetailsComponent },
      { path: 'usuario/edit/:id', component: UsuarioEditComponent },
      { path: 'animais', component: AnimalListComponent },
      { path: 'animal/cadastro', component: AnimalDetailsComponent },
      { path: 'consultas', component: ConsultaListComponent },
      { path: 'anamnese/register/:id', component: ConsultaAnamneseDetailsComponent},
      { path: 'exame/register', component: ExameDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
