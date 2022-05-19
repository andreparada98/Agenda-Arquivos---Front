import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtAuthentication } from '../../../models/jwt.authentication.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private authentication: JwtAuthentication
  formLogin: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: [],
      password: []

    })
  }

  onSubmit() {
    console.log('Aoba')
  }

}
