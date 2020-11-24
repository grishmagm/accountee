import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-showvendor',
  templateUrl: './showvendor.component.html',
  styleUrls: ['./showvendor.component.css']
})
export class ShowvendorComponent implements OnInit {
  vendor$: Observable<Vendor[]>
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.vendor$ = this.userService.getVendor();
  }
  

}
