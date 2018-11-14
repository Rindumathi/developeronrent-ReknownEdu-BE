import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationpageComponent } from './activationpage.component';

describe('ActivationpageComponent', () => {
  let component: ActivationpageComponent;
  let fixture: ComponentFixture<ActivationpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
