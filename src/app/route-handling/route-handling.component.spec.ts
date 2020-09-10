import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteHandlingComponent } from './route-handling.component';

describe('RouteHandlingComponent', () => {
  let component: RouteHandlingComponent;
  let fixture: ComponentFixture<RouteHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
