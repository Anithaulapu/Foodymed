import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  registrationData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor() {}

  register() {
    localStorage.setItem('registrationData', JSON.stringify(this.registrationData));
    console.log('Registration data saved');
    // Additional logic like navigation or confirmation can be added here.
  }

  getRegistrationData() {
    const data = localStorage.getItem('registrationData');
    return data ? JSON.parse(data) : null;
  }
}
