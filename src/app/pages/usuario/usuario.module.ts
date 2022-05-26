import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsuarioRoutingModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CardModule,
    PasswordModule,
    ImageModule,
    TableModule
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class UsuarioModule { }
