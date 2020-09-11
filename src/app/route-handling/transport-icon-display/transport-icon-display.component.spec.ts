import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportIconDisplayComponent } from './transport-icon-display.component';

describe('TransportIconDisplayComponent', () => {
  let component: TransportIconDisplayComponent;
  let fixture: ComponentFixture<TransportIconDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportIconDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportIconDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
