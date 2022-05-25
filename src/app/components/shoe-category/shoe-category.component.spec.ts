import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeCategoryComponent } from './shoe-category.component';

describe('ShoeCategoryComponent', () => {
  let component: ShoeCategoryComponent;
  let fixture: ComponentFixture<ShoeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
