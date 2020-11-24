import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    companyname: new FormControl("", [Validators.required]),
    number: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    state: new FormControl("", [Validators.required]),
    balance: new FormControl("", [Validators.required]),
    date: new FormControl("", [Validators.required]),
    gst: new FormControl("", [Validators.required]),
    

  });
  vendor$: Observable<Vendor[]>
  constructor(private userService:UserService,private router :Router) { }

  ngOnInit(){this.vendor$ = this.userService.getVendor();}
 userRegister() {
   console.log("done");
    //if (this.registerForm.valid) {
      console.log(this.registerForm.value)
      this.userService.createclient(this.registerForm.value).subscribe((res) => {
        console.log(res.result)
        this.registerForm.reset();
        //this.router.navigate(["user/login"]);
      });
    //}
  }
  
    
  
}
