import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCompleteComponent } from './delivery-complete.component';

describe('DeliveryCompleteComponent', () => {
  let component: DeliveryCompleteComponent;
  let fixture: ComponentFixture<DeliveryCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
