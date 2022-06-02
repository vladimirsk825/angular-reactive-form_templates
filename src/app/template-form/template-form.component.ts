import { Component, OnInit } from '@angular/core';
import { IRegisterForm } from '../interfaces/register-form.interface';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  registerForm:  IRegisterForm ={
    name:'',
    email:'',
    password:'',
    repeatPass:''
  }
   constructor() { }
 
   ngOnInit(): void {
   }
   submit():void {
     console.log(this.registerForm ); 
   }

}
