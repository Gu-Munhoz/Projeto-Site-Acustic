import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaAntiComponent } from './porta-anti.component';

describe('PortaAntiComponent', () => {
  let component: PortaAntiComponent;
  let fixture: ComponentFixture<PortaAntiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortaAntiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortaAntiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
