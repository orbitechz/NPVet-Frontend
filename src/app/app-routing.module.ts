import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorListComponent } from './views/tutor/tutor-list/tutor-list.component';
import { UsuarioListComponent } from './views/usuario/usuario-list/usuario-list.component';
import { UsuarioDetailsComponent } from './views/usuario/usuario-details/usuario-details.component';
import { UsuarioEditComponent } from './views/usuario/usuario-edit/usuario-edit.component';
import { UsuarioInfoComponent } from './views/usuario/usuario-info/usuario-info.component';

const routes: Routes = [
  {path: "tutor", component: TutorListComponent},
  {path: "usuario", component: UsuarioListComponent},
  {path: "usuario/register", component: UsuarioDetailsComponent},
  {path: "usuario/edit/:id", component: UsuarioEditComponent},
  {path: "usuario/details/:id", component: UsuarioInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
