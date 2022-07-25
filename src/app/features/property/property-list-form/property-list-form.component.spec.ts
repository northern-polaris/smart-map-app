import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListFormComponent } from './property-list-form.component';

describe('PropertyListFormComponent', () => {
  let component: PropertyListFormComponent;
  let fixture: ComponentFixture<PropertyListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyListFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
