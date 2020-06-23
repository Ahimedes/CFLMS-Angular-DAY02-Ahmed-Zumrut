import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  
  info = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
  });
 
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
      var a = this.info.value;
      console.log(a)
    }
   
}
