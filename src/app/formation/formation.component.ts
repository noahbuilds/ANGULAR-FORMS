import { Component } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
})
export class FormationComponent {
  regData: Registration = {};
  selected: string[] = [];
  login: boolean = false;

  validator(
    firstname: string,
    lastname: string,
    qualification: string,
    male: boolean,
    female: boolean,
    angular: boolean,
    vue: boolean,
    react: boolean
    //point: Registration
  ) {
    let register = new Registration();

    // assign data to register
    register.firstname = firstname;
    register.lastname = lastname;
    register.female = female;
    register.male = male;
    register.qualification = qualification;
    register.angular = angular;
    register.vue = vue;
    register.react = react;

    // validation starts here
    if (register.firstname == '') {
      console.log('input firstname');
    } else if (register.lastname == '') {
      console.log('input lastname');
    } else if (register.qualification == '') {
      console.log('select your qualification');
    } else if (register.male == false && register.female == false) {
      console.log('Please tell us your gender');
    } else if (
      register.vue == false &&
      register.react == false &&
      register.angular == false
    ) {
      console.log('Please select a skill');
    } else {
      this.login = true;
      this.regData = register;
      console.log(this.regData);
      //console.log(`Welcome in ${this.regData}`);
      return;
    }
  }
}

export class Registration {
  firstname?: string;
  lastname?: string;
  male?: boolean;
  female?: boolean;
  qualification?: string;
  angular?: boolean;
  react?: boolean;
  vue?: boolean;
}
