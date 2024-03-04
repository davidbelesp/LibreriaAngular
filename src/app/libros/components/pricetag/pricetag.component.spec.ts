import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricetagComponent } from './pricetag.component';

describe('PricetagComponent', () => {
  let component: PricetagComponent;
  let fixture: ComponentFixture<PricetagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricetagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricetagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
