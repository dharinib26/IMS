import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgentComponent } from './createagent.component';

describe('CreateagentComponent', () => {
  let component: CreateAgentComponent;
  let fixture: ComponentFixture<CreateAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
