import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballServiceComponent } from './dragonball-service.component';

describe('DragonballServiceComponent', () => {
  let component: DragonballServiceComponent;
  let fixture: ComponentFixture<DragonballServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonballServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonballServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
