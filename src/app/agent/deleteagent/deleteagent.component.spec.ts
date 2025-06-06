import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteagentComponent } from './deleteagent.component';

describe('DeleteagentComponent', () => {
  let component: DeleteagentComponent;
  let fixture: ComponentFixture<DeleteagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteagentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
