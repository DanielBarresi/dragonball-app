import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponentComponent } from './search-form-component.component';

describe('SearchFormComponentComponent', () => {
  let component: SearchFormComponentComponent;
  let fixture: ComponentFixture<SearchFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
