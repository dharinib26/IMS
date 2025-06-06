import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetclaimbyidComponent } from './getclaimbyid.component';

describe('GetclaimbyidComponent', () => {
  let component: GetclaimbyidComponent;
  let fixture: ComponentFixture<GetclaimbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetclaimbyidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetclaimbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
