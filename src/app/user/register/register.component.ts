import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
//import { jsPDF } from "jspdf";
//const doc = new jsPDF();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
  

  constructor(private userService:UserService,private router :Router) { }

  ngOnInit(){}
 userRegister() {
   console.log("done");
    //if (this.registerForm.valid) {
      console.log(this.registerForm.value)
      this.userService.register(this.registerForm.value).subscribe((res) => {
       
        
        //this.registerForm.reset();
        this.router.navigate(["user/login"]);
      });
    //}
  }

}
