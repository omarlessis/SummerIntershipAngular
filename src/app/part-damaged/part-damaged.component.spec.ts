import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartDamagedComponent } from './part-damaged.component';

describe('PartDamagedComponent', () => {
  let component: PartDamagedComponent;
  let fixture: ComponentFixture<PartDamagedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartDamagedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartDamagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
