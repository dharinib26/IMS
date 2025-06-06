import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpoliciesComponent } from './listpolicies.component';

describe('ListpoliciesComponent', () => {
  let component: ListpoliciesComponent;
  let fixture: ComponentFixture<ListpoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListpoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
