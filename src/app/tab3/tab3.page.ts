import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  goals = [
    { title: 'FORTE DIMAGRIMENTO', value: 'FORTE_DIMAGRIMENTO', img: 'assets/images/cloud.jpg' },
    { title: 'DIMAGRIMENTO', value: 'DIMAGRIMENTO', img: 'assets/images/cloud.jpg' },
    { title: 'PERFORMANCE / SALUTE', value: 'PERFORMANCE_SALUTE', img: 'assets/images/cloud.jpg' },
    { title: 'MASSA / TONIFICAZIONE', value: 'MASSA_TONIFICAZIONE', img: 'assets/images/cloud.jpg' }
  ];
  selectedGoal: string="";

  constructor() {}

  saveGoal() {
    localStorage.setItem('userGoal', this.selectedGoal);
  }
}
