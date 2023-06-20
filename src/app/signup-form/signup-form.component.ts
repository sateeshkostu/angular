import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form', 
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  public signupForm!: FormGroup;
  router: any;
constructor(private formBuilder : FormBuilder, private http: HttpClient, private route:Router ){}

ngOnInit(){
  this.signupForm= this.formBuilder.group({
    fullname: [''],
    email: [''],
    mobile: [''],
    password:['']
  })
}
signup(){
  this.http.post<any>("http://localhost:3000/signup",this.signupForm.value)
  .subscribe(res=>{
    alert("signup successfull");
    this.signupForm.reset();
    this.router.navigate(['login']);
  })
}

}
