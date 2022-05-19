import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
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
  returnUrl: string;
  submitted = false;
  error = '';


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public get f() { return this.formLogin.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formLogin.invalid) {
      return;
    }

    this.authentication = new JwtAuthentication(this.f.username.value, this.f.password.value);
    this.authenticationService.login(this.authentication)
      .pipe(first())
      .subscribe(
        data => {
            this.router.navigate(['/']);
        },
        error => {
          this.error = error;
          this.submitted = false;
        });
  }
}
