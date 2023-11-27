import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacologyComponent } from './pharmacology.component';

describe('PharmacologyComponent', () => {
  let component: PharmacologyComponent;
  let fixture: ComponentFixture<PharmacologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacologyComponent]
    });
    fixture = TestBed.createComponent(PharmacologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
