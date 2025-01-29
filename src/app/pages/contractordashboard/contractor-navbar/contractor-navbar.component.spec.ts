import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorNavbarComponent } from './contractor-navbar.component';

describe('ContractorNavbarComponent', () => {
  let component: ContractorNavbarComponent;
  let fixture: ComponentFixture<ContractorNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractorNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
