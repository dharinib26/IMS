import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagentsComponent } from './listagents.component';

describe('ListagentsComponent', () => {
  let component: ListagentsComponent;
  let fixture: ComponentFixture<ListagentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
