import {Component, OnInit, ViewChild, EventEmitter} from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') signupForm:NgForm;
  default='pet';
newname='domi';
  answer='';
  genders=['male','female'];
  default1=this.genders[1];
  submitted=false;
  user={
    username:"",
    age:"",
    mail:"",
    secret:"",
    answer:"",
    gender:""

  };


  constructor() { }

  suggestUserName() {
    this.newname='Supername';
  }
  ngOnInit() {
  }
onSubmit(){
console.log(this.signupForm);
this.submitted=true;
this.user.username=this.signupForm.value.userData.username;
  this.user.age=this.signupForm.value.userData.age;
  this.user.mail=this.signupForm.value.userData.mail;
  this.user.secret=this.signupForm.value.secret;
  this.user.answer=this.signupForm.value.answer;
  this.user.gender=this.signupForm.value.gender;
}
clearForm(){

  if (confirm("Are you sure you want to delete your information!") == true) {

    this.signupForm.reset();
  } else {

  }

}
}
