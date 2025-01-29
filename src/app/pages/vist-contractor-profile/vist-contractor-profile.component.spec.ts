import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistContractorProfileComponent } from './vist-contractor-profile.component';

describe('VistContractorProfileComponent', () => {
  let component: VistContractorProfileComponent;
  let fixture: ComponentFixture<VistContractorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistContractorProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistContractorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
