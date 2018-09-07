import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrankiFunctionsComponent } from './franki-functions.component';

describe('FrankiFunctionsComponent', () => {
  let component: FrankiFunctionsComponent;
  let fixture: ComponentFixture<FrankiFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrankiFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrankiFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
