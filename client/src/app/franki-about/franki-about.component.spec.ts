import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrankiAboutComponent } from './franki-about.component';

describe('FrankiAboutComponent', () => {
  let component: FrankiAboutComponent;
  let fixture: ComponentFixture<FrankiAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrankiAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrankiAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
