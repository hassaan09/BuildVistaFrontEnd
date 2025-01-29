import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcontractorComponent } from './findcontractor.component';

describe('FindcontractorComponent', () => {
  let component: FindcontractorComponent;
  let fixture: ComponentFixture<FindcontractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindcontractorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindcontractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
