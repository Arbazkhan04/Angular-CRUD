import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userRegistration: FormGroup;

  title = 'angrlar-crud';


  constructor(private toastr: ToastrService, private fb: FormBuilder) {

  }

  ngOnInit() {

    this.setUserRegistrationvalue()

  }

  setUserRegistrationvalue() {
    this.userRegistration = this.fb.group({
      id: [0],
      title: ['', Validators.required],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      dob: ['', Validators.compose([Validators.required, Validators.pattern('^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      email: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      acceptTerms: [false, Validators.required]

    })
  }
 cancel(){
  this.userRegistration.reset
 }

 save(){

  if(this.userRegistration.invalid){
     this.toastr.warning('please fill the from carefully')
  }
  else(this.userRegistration.valid)
  {
    
    this.toastr.success('Congrats you have fill the form successfuly')
  }
 }

}
