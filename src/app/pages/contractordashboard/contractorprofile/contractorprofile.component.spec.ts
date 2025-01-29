import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorprofileComponent } from './contractorprofile.component';

describe('ContractorprofileComponent', () => {
  let component: ContractorprofileComponent;
  let fixture: ComponentFixture<ContractorprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractorprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
