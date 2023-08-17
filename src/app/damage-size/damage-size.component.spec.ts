import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageSizeComponent } from './damage-size.component';

describe('DamageSizeComponent', () => {
  let component: DamageSizeComponent;
  let fixture: ComponentFixture<DamageSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamageSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamageSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
