import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpolicybycustomerComponent } from './getpolicybycustomer.component';

describe('GetpolicybycustomerComponent', () => {
  let component: GetpolicybycustomerComponent;
  let fixture: ComponentFixture<GetpolicybycustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetpolicybycustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetpolicybycustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
