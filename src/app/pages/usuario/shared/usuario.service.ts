import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { AbstractService } from '../../../services/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends AbstractService<UserModel>{

  constructor(http: HttpClient) { 
    super(http, 'usuario')
  }
}
