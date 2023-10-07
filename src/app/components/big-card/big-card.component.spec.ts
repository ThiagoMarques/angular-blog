import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardComponent } from './big-card.component';

describe('BigCardComponent', () => {
  let component: BigCardComponent;
  let fixture: ComponentFixture<BigCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BigCardComponent]
    });
    fixture = TestBed.createComponent(BigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit(`should test title - bigcard`, () => {
    const fixture = TestBed.createComponent(BigCardComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Saiu uma nova versão do Angular');
    expect(app.content).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
  });
});
