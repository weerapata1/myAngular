import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChkEmailCodComponent } from './chk-email-cod.component';

describe('ChkEmailCodComponent', () => {
  let component: ChkEmailCodComponent;
  let fixture: ComponentFixture<ChkEmailCodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChkEmailCodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChkEmailCodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
