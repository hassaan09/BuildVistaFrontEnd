import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorformComponent } from './contractorform.component';

describe('ContractorformComponent', () => {
  let component: ContractorformComponent;
  let fixture: ComponentFixture<ContractorformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractorformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
