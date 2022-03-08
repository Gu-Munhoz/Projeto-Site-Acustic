import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaAntiComponent } from './janela-anti.component';

describe('JanelaAntiComponent', () => {
  let component: JanelaAntiComponent;
  let fixture: ComponentFixture<JanelaAntiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanelaAntiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JanelaAntiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
