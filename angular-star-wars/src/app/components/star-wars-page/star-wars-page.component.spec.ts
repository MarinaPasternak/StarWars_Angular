import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsPageComponent } from './star-wars-page.component';

describe('StarWarsPageComponent', () => {
  let component: StarWarsPageComponent;
  let fixture: ComponentFixture<StarWarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
