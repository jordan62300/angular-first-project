import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormArray} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formbuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
  this.userForm = this.formbuilder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['', [Validators.required,Validators.email]],
    drinkPreference:['',Validators.required],
    hobbies: this.formbuilder.array([])
  })
  }
  
  onSubmitForm() {
    const formValue = this.userForm.value
    const newUser = new User(
      formValue['firstname'],
      formValue['lastname'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  getHobbies() : FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const newHobbyControl = this.formbuilder.control('',Validators.required)
    this.getHobbies().push(newHobbyControl)
  }

}
