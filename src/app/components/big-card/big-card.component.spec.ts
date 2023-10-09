import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { BigCardComponent } from './big-card.component';

class ParamMapStub {
  constructor(private paramMap: any) {}

  get(name: string): string | null {
    return this.paramMap[name];
  }
}

describe('BigCardComponent', () => {
  let component: BigCardComponent;
  let fixture: ComponentFixture<BigCardComponent>;
  const paramMap = {
    get: (id: string) => '1'  
  };
  const activatedRouteStub = {
    paramMap: of((new ParamMapStub(paramMap) as unknown) as ParamMap)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BigCardComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(BigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should test minimum title', () => {
    expect(component.title.length).toBeLessThanOrEqual(0);
  });

  it('Should test minimum content', () => {
    expect(component.content.length).toBeLessThanOrEqual(0);
  });
});
