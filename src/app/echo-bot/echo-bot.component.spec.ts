import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchoBotComponent } from './echo-bot.component';

describe('EchoBotComponent', () => {
  let component: EchoBotComponent;
  let fixture: ComponentFixture<EchoBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchoBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchoBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
