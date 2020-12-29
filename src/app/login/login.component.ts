import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,FormBuilder, Validators ,FormArray} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private route:Router


  ReactiveForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.ReactiveForm = this.fb.group({
      name: ['' , [Validators.required , Validators.minLength(3)]],
      email: ['' , [Validators.required , Validators.minLength(10),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),Validators.email]],
      pwd: ['' , [Validators.required , Validators.minLength(6),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      gender: ['' , [Validators.required]]
    });
  }

// ro return form values to html
  get registerFormControl() {
    // console.log( this.ReactiveForm.controls)
    return this.ReactiveForm.controls;
  }
  Move(){
    if(this.ReactiveForm.valid){
      this.route.navigate(['/home']);
    }
    

  }
  ReactiveFormSubmit(){
    if(this.ReactiveForm.valid){
      this.route.navigate(['/home']);
    }

  }



}
