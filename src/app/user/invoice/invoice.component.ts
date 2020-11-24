import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { jsPDF } from "jspdf";
const doc = new jsPDF();
//import { easyinvoice } from 'easyinvoice';
//import { Component } from '@angular/core';

//import pdfMake from "pdfmake/build/pdfmake";
//import pdfFonts from "pdfmake/build/vfs_fonts";
//pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
 
  invoiceForm = new FormGroup({
    invoiceNumber: new FormControl("", [Validators.required]),
    invoiceDate: new FormControl("", [Validators.required])
  });
  $scope: any;
  


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {}
  

  
}
