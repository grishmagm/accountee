import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsalereturnComponent } from './showsalereturn.component';

describe('ShowsalereturnComponent', () => {
  let component: ShowsalereturnComponent;
  let fixture: ComponentFixture<ShowsalereturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsalereturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsalereturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
