import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersianaComponent } from './persiana.component';

describe('PersianaComponent', () => {
  let component: PersianaComponent;
  let fixture: ComponentFixture<PersianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersianaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
