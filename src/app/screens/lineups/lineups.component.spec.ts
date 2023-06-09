import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineupsComponent } from './lineups.component';

describe('LineupsComponent', () => {
  let component: LineupsComponent;
  let fixture: ComponentFixture<LineupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
