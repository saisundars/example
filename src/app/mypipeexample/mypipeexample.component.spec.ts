import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypipeexampleComponent } from './mypipeexample.component';

describe('MypipeexampleComponent', () => {
  let component: MypipeexampleComponent;
  let fixture: ComponentFixture<MypipeexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypipeexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypipeexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
