import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorHelpcentreComponent } from './contractor-helpcentre.component';

describe('ContractorHelpcentreComponent', () => {
  let component: ContractorHelpcentreComponent;
  let fixture: ComponentFixture<ContractorHelpcentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractorHelpcentreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractorHelpcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
