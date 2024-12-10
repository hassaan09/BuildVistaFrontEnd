import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostestimationComponent } from './costestimation.component';

describe('CostestimationComponent', () => {
  let component: CostestimationComponent;
  let fixture: ComponentFixture<CostestimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostestimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostestimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
