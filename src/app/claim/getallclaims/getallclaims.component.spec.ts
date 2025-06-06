import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallclaimsComponent } from './getallclaims.component';

describe('GetallclaimsComponent', () => {
  let component: GetallclaimsComponent;
  let fixture: ComponentFixture<GetallclaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallclaimsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
