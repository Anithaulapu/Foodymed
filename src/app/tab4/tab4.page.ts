import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  userInfo = {
    gender: '',
    age: null,
    height: null,
    weight: null
  };

  constructor() {}

  saveUserInfo() {
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
  }
}
