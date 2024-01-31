import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
sedentaryWork: string = '';
activeWork: string = '';
isProfessionalAthlete: boolean = false;

  constructor() {
    this.loadData();
  }

  saveData() {
    const surveyData = {
      sedentaryWork: this.sedentaryWork,
      activeWork: this.activeWork,
      isProfessionalAthlete: this.isProfessionalAthlete
    };
    localStorage.setItem('surveyData', JSON.stringify(surveyData));
  }

  loadData() {
    const value: string = localStorage.getItem('surveyData') as string;
    const savedData = JSON.parse(value);
    if (savedData) {
      this.sedentaryWork = savedData.sedentaryWork;
      this.activeWork = savedData.activeWork;
      this.isProfessionalAthlete = savedData.isProfessionalAthlete;
    }
  }

}
