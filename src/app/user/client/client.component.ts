import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
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
         console.log(res.result)
         //this.registerForm.reset();
         this.router.navigate(["user/login"]);
       });
     //}
   }
 

}
