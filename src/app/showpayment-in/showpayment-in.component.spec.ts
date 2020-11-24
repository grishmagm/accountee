import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpaymentInComponent } from './showpayment-in.component';

describe('ShowpaymentInComponent', () => {
  let component: ShowpaymentInComponent;
  let fixture: ComponentFixture<ShowpaymentInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpaymentInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpaymentInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
