import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsaleinvoiceComponent } from './showsaleinvoice.component';

describe('ShowsaleinvoiceComponent', () => {
  let component: ShowsaleinvoiceComponent;
  let fixture: ComponentFixture<ShowsaleinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsaleinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsaleinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
