/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabAreaComponent } from './tab-area.component';

describe('TabAreaComponent', () => {
  let component: TabAreaComponent;
  let fixture: ComponentFixture<TabAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
