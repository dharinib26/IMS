import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetagentComponent } from './getagent.component';

describe('GetagentComponent', () => {
  let component: GetagentComponent;
  let fixture: ComponentFixture<GetagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetagentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
