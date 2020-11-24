import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvendorComponent } from './showvendor.component';

describe('ShowvendorComponent', () => {
  let component: ShowvendorComponent;
  let fixture: ComponentFixture<ShowvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowvendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
