import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/service/user.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemForm = new FormGroup({
    itemname: new FormControl("", [Validators.required]),
    unit: new FormControl("", [Validators.required]),
    itemcode: new FormControl("", [Validators.required]),
    hsn: new FormControl("", [Validators.required]),
    saleprice: new FormControl("", [Validators.required]),
    purchaseprice: new FormControl("", [Validators.required]),
    taxrate: new FormControl("", [Validators.required]),
    
  });

  constructor(private userService:UserService,private router :Router) { }

  ngOnInit() {}
  createitem() {
    console.log("done");
     //if (this.registerForm.valid) {
       console.log(this. itemForm.value)
       this.userService.createitem(this.itemForm.value).subscribe((res) => {
        
         
         //this.registerForm.reset();
        // this.router.navigate(["user/login"]);
       });
     //}
   }

}
