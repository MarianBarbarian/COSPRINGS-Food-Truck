import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reviews2Page } from './reviews2.page';

describe('Reviews2Page', () => {
  let component: Reviews2Page;
  let fixture: ComponentFixture<Reviews2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reviews2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reviews2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
