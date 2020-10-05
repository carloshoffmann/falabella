import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroApiQueriesComponent } from './superheroapi-queries.component';

describe('SuperHeroApiQueriesComponent', () => {
  let component: SuperHeroApiQueriesComponent;
  let fixture: ComponentFixture<SuperHeroApiQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroApiQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHeroApiQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
