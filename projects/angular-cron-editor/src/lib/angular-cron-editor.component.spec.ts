import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCronEditorComponent } from './angular-cron-editor.component';

describe('AngularCronEditorComponent', () => {
  let component: AngularCronEditorComponent;
  let fixture: ComponentFixture<AngularCronEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCronEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCronEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
