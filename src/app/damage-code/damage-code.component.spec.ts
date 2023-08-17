import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageCodeComponent } from './damage-code.component';

describe('DamageCodeComponent', () => {
  let component: DamageCodeComponent;
  let fixture: ComponentFixture<DamageCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamageCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamageCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
