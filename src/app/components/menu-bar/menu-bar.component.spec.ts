import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';

describe('MenuBarComponent', () => {
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MenuBarComponent]
    });
    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify HTML', () => {
    const compiled = fixture.nativeElement;
    const menuBar = compiled.querySelector('.container__menu-bar');
    expect(menuBar).toBeTruthy();

    const ul = menuBar.querySelector('ul');
    expect(ul).toBeTruthy();

    const liElements = ul.querySelectorAll('li');
    expect(liElements.length).toBe(3);

    const anchorElements = ul.querySelectorAll('a');
    expect(anchorElements.length).toBe(2);

    expect(anchorElements[0].getAttribute('href')).toBe('https://www.linkedin.com/in/thiagossmarques/');
    expect(anchorElements[0].innerText).toBe('Linkedin');
    expect(anchorElements[1].getAttribute('href')).toBe('https://github.com/thiagomarques');
    expect(anchorElements[1].innerText).toBe('Github');
  });
});
