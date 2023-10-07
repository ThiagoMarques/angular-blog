import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTitleComponent } from './menu-title.component';

describe('MenuTitleComponent', () => {
  let component: MenuTitleComponent;
  let fixture: ComponentFixture<MenuTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MenuTitleComponent]
    });
    fixture = TestBed.createComponent(MenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit(`should have as title 'angular-blog'`, () => {
    const fixture = TestBed.createComponent(MenuTitleComponent);
    const app = fixture.componentInstance;
    expect(app.title.length).toBeGreaterThanOrEqual(1);
  });
});
