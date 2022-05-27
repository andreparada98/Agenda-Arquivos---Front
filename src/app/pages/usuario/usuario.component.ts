import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { UsuarioService } from './shared/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
usuarios: UserModel[]
totalRecords: Number
  constructor(
    private usuarioService: UsuarioService
    ) { }

  ngOnInit() {
    this.loadFromServer()
  }

   loadFromServer(){
    this.usuarioService.getAllUsers().subscribe(res => {
      this.usuarios = res
      this.totalRecords = res.length
      console.log(res)
    })
  }

}
