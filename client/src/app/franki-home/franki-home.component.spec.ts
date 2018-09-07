import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrankiHomeComponent } from './franki-home.component';

describe('FrankiHomeComponent', () => {
  let component: FrankiHomeComponent;
  let fixture: ComponentFixture<FrankiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrankiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrankiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
