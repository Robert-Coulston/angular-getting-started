import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')
  signupForm: NgForm;

  defaultQuestion: string ='pet';
  defaultEmail: string = "a@b.c";
  answer: string = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSSubmit(form: NgForm) {
    console.log(form);
  }

  CheckEmail(email: any) {
    console.log(email);
  }
  emailOnBlur(e: NgModel) {
    console.log("email on blur", e.value)
  }

  // onSubmit() {
  //   console.log(this.signupForm.dirty);
  // }


}
