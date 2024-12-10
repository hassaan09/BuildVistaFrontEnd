import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostdetailsComponent } from './costdetails.component';

describe('CostdetailsComponent', () => {
  let component: CostdetailsComponent;
  let fixture: ComponentFixture<CostdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
