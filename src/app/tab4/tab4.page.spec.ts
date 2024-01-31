import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tab4Page } from './tab4.page';

describe('tab4Page', () => {
  let component: tab4Page;
  let fixture: ComponentFixture<tab4Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [tab4Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(tab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
