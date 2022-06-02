import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
 registerForm? :  FormGroup | null = null;
 submited = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name:["", Validators.required ],
        email:["", [Validators.required, Validators.email]],
        password: ["",[Validators.required, Validators.minLength(6)]],
        repeatPass:["", Validators.required]
      },
      {
        validator: this.mustMatch("password", "repeatPass")
      }
    );
  }

  mustMatch(controlName: string, matchingcontrolName: string) {
   return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingcontrolName];
    if (matchingControl.errors && !matchingControl?.errors?.['mustMatch']) {
      
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch : true})
    }
    else {
      matchingControl.setErrors(null);
    }

   }
 }

 get form(){
    return this.registerForm?.controls;
 }

 onSubmit(){
   this.submited = true;
   if ( this.registerForm?.invalid){
    return;
   }
   alert(
     "SUCESS!! \n" + JSON.stringify(this.registerForm?.value, null, 4)
   );
 }

 onReset(){
   this.submited = false;
   this.registerForm?.reset();
 }
}
