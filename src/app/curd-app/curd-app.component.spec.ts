import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdAppComponent } from './curd-app.component';

describe('CurdAppComponent', () => {
  let component: CurdAppComponent;
  let fixture: ComponentFixture<CurdAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
