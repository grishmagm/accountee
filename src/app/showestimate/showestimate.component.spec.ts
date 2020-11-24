import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowestimateComponent } from './showestimate.component';

describe('ShowestimateComponent', () => {
  let component: ShowestimateComponent;
  let fixture: ComponentFixture<ShowestimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowestimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowestimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
