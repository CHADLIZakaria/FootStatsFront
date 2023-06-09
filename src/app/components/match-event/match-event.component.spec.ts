import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchEventComponent } from './match-event.component';

describe('MatchEventComponent', () => {
  let component: MatchEventComponent;
  let fixture: ComponentFixture<MatchEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
