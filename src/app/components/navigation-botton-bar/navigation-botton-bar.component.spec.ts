import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBottonBarComponent } from './navigation-botton-bar.component';

describe('NavigationBottonBarComponent', () => {
  let component: NavigationBottonBarComponent;
  let fixture: ComponentFixture<NavigationBottonBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBottonBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationBottonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
