import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorHomeComponent } from './contractor-home.component';

describe('ContractorHomeComponent', () => {
  let component: ContractorHomeComponent;
  let fixture: ComponentFixture<ContractorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractorHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
