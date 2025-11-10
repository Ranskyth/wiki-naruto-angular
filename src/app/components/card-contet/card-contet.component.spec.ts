import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContetComponent } from './card-contet.component';

describe('CardContetComponent', () => {
  let component: CardContetComponent;
  let fixture: ComponentFixture<CardContetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardContetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardContetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
