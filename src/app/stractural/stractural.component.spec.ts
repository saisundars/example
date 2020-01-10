import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StracturalComponent } from './stractural.component';

describe('StracturalComponent', () => {
  let component: StracturalComponent;
  let fixture: ComponentFixture<StracturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StracturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StracturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
