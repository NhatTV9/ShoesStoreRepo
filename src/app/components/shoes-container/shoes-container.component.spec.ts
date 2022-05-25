import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesContainerComponent } from './shoes-container.component';

describe('ShoesContainerComponent', () => {
  let component: ShoesContainerComponent;
  let fixture: ComponentFixture<ShoesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
