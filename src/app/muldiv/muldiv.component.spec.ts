import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuldivComponent } from './muldiv.component';

describe('MuldivComponent', () => {
  let component: MuldivComponent;
  let fixture: ComponentFixture<MuldivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuldivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuldivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
