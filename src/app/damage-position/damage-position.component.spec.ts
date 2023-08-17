import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagePositionComponent } from './damage-position.component';

describe('DamagePositionComponent', () => {
  let component: DamagePositionComponent;
  let fixture: ComponentFixture<DamagePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamagePositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamagePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
