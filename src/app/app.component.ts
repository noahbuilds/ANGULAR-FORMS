import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  regData: Registration = {};
  options: string[] = ['react', 'angular', 'vue'];
  selected: string[] = [];
  login: boolean = false;

  addSkill(option: string) {
    this.selected.push(option);
    //console.log(this.selected)
  }

  validator(
    firstname: string,
    lastname: string,
    qualification: string,
    skill: string[],
    gender: string
    //point: Registration
  ) {
    let register = new Registration();

    register.firstname = firstname;
    register.lastname = lastname;
    register.gender = gender;
    register.qualification = qualification;
    register.skill = this.selected;
    register.lastname = lastname;

    // register.firstname = point.firstname;
    // register.lastname = point.lastname;
    // register.gender = point.gender;
    // register.qualification = point.qualification;
    // register.skill = this.selected;
    // register.lastname = point.lastname;

    if (register.firstname == '') {
      console.log('input firstname');
    } else if (register.lastname == '') {
      console.log('input lastname');
    } else if (register.qualification == '') {
      console.log('select your qualification');
    } else if (register.gender == '') {
      console.log('Please tell us your gender');
    } else if (register.skill.length == 0) {
      console.log('please select a skill');
    } else {
      this.login = true;
      this.regData = register;
      console.log(Object.entries(this.regData))
      //console.log(`Welcome in ${this.regData}`);
      return;
    }
  }
}

export class Registration {
  firstname?: string;
  lastname?: string;
  gender?: string;
  qualification?: string;
  skill?: string[];
}
