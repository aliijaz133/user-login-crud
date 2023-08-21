import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompComponent } from './list-comp.component';

describe('ListCompComponent', () => {
  let component: ListCompComponent;
  let fixture: ComponentFixture<ListCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCompComponent]
    });
    fixture = TestBed.createComponent(ListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
