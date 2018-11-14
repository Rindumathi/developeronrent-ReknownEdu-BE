import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendactivationpageComponent } from './resendactivationpage.component';

describe('ResendactivationpageComponent', () => {
  let component: ResendactivationpageComponent;
  let fixture: ComponentFixture<ResendactivationpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResendactivationpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendactivationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
