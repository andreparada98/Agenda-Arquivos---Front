import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsuarioRoutingModule,
    CardModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class UsuarioModule { }
