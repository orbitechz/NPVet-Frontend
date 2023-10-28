import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './core/menu/menu.component';
import { LoginComponent } from './core/login/login.component';
import { ErrorsComponent } from './core/errors/errors.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { ListComponent } from './views/usuario/list/list.component';
import { DetailsComponent } from './views/usuario/details/details.component';
import { UsuarioInfoComponent } from './views/usuario/usuario-info/usuario-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    LoginComponent,
    ErrorsComponent,
    UsuarioComponent,
    ListComponent,
    DetailsComponent,
    UsuarioInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
