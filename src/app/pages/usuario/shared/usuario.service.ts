import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UserModel } from '../../../models/user.model';
import { AbstractService } from '../../../services/abstract.service';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService extends AbstractService<UserModel>{
  
  private userSubject: BehaviorSubject<UserModel>;

  constructor(private http: HttpClient) { 
    super(http, 'accounts')
  }
/*
  public get userValue(): UserModel {
    return this.userSubject.value;
}
*/
  

  getAllUsers(): Observable<UserModel[]> {
      console.log(this.baseUrlService)
    return this.http.get<UserModel[]>(this.baseUrlService)
  }
}
