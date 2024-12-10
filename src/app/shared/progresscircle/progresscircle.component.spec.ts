import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresscircleComponent } from './progresscircle.component';

describe('ProgresscircleComponent', () => {
  let component: ProgresscircleComponent;
  let fixture: ComponentFixture<ProgresscircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgresscircleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgresscircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
