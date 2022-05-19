import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserModel } from '../../../models/user.model';
import { HomePageService } from '../home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  unsubscribe: Subject<void> = new Subject<void>();
  formLogin: FormGroup;
  kk: UserModel

  constructor(
    private formBuilder: FormBuilder,
    public homePageService: HomePageService
  ) {
   }

  ngOnInit(): void {
   this.homePageService.getAllUsers().pipe(takeUntil(this.unsubscribe)).subscribe((res) => console.log(res))
   console.log(this.kk)
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public get f() { return this.formLogin.controls; }

  handleClick(event){
    //this.homePageService.getAllUsers()
  }

  onSubmit(){
    console.log("Submitou")
    if (this.formLogin.invalid) {
      return;
    }
  }


}
