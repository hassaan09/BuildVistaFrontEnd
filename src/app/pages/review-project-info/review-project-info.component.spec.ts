import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewProjectInfoComponent } from './review-project-info.component';

describe('ReviewProjectInfoComponent', () => {
  let component: ReviewProjectInfoComponent;
  let fixture: ComponentFixture<ReviewProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewProjectInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
