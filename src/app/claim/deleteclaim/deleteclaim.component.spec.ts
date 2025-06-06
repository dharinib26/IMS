import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteclaimComponent } from './deleteclaim.component';

describe('DeleteclaimComponent', () => {
  let component: DeleteclaimComponent;
  let fixture: ComponentFixture<DeleteclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteclaimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
