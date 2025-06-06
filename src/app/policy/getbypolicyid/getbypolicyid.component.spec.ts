import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbypolicyidComponent } from './getbypolicyid.component';

describe('GetbypolicyidComponent', () => {
  let component: GetbypolicyidComponent;
  let fixture: ComponentFixture<GetbypolicyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetbypolicyidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetbypolicyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
