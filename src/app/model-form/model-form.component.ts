import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css'],
})
export class ModelFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  fg: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.fg = this.fb.group({
      emailControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      usernameControl: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]),
      passwordControl: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  formSubmit() {
    return console.log(this.fg);
  }

  get username() {
    return this.fg.controls['usernameControl'];
  }

  get password() {
    return this.fg.controls['passwordControl'];
  }

  get email() {
    return this.fg.controls['emailControl'];
  }
}
