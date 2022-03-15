import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm = this.formBuilder.group({
    username:[''],
    password:['']
  })
  constructor(private formBuilder:FormBuilder,
              private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }
  get myFormValue():User{
    return this.myForm.value
  }
  onSubmit(){
    this.authService.login(this.myFormValue)
    .subscribe(
      (res)=>{
        this.router.navigate(['/news'])
      },
      (err)=>console.log(err.message)
    )
    
    // this.myForm.value.username = this.myForm.value.password = ''
    // console.log(this.myForm.value)
  }
}
