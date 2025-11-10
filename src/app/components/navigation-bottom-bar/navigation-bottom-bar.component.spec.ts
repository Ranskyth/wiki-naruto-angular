import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBottomBarComponent } from './navigation-bottom-bar.component';

describe('NavigationBottomBarComponent', () => {
  let component: NavigationBottomBarComponent;
  let fixture: ComponentFixture<NavigationBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBottomBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
