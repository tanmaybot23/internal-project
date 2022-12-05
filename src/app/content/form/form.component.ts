
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssetsDataService } from './../../services/assets-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  productForm !: FormGroup;
  constructor(private formbuilder: FormBuilder, private api: AssetsDataService) { }

  ngOnInit(): void {
  // this.productForm = this.formbuilder.group({
  //   code: ['',Validators.required],
  //   camid: ['',Validators.required],
  //   assetid: ['',Validators.required],
  //   rid: ['',Validators.required],
  //   cusip: ['',Validators.required],
  //   fcode: ['',Validators.required],
  //   paid: ['',Validators.required]
  // })
  }
  toShow(){
    
  }
}
  
