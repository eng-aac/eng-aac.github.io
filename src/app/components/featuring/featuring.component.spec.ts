import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturingComponent } from './featuring.component';

describe('FeaturingComponent', () => {
  let component: FeaturingComponent;
  let fixture: ComponentFixture<FeaturingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
