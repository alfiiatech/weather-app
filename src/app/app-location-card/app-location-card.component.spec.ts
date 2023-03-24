import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLocationCardComponent } from './app-location-card.component';

describe('AppLocationCardComponent', () => {
  let component: AppLocationCardComponent;
  let fixture: ComponentFixture<AppLocationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLocationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLocationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
