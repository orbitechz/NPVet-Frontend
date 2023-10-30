import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorListComponent } from './views/tutor/tutor-list/tutor-list.component';
import { UsuarioListComponent } from './views/usuario/usuario-list/usuario-list.component';
import { UsuarioDetailsComponent } from './views/usuario/usuario-details/usuario-details.component';
import { UsuarioEditComponent } from './views/usuario/usuario-edit/usuario-edit.component';
import { UsuarioInfoComponent } from './views/usuario/usuario-info/usuario-info.component';
import { AnimalListComponent } from './views/animal/animal-list/animal-list.component';
import { AnimalDetailsComponent } from './views/animal/animal-details/animal-details.component';

const routes: Routes = [
  {path: "tutores", component: TutorListComponent},
  {path: "usuario", component: UsuarioListComponent},
  {path: "usuario/register", component: UsuarioDetailsComponent},
  {path: "usuario/edit/:id", component: UsuarioEditComponent},
  {path: "usuario/details/:id", component: UsuarioInfoComponent},
  {path: "animal", component: AnimalListComponent},
  {path: "animal/cadastro", component: AnimalDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
