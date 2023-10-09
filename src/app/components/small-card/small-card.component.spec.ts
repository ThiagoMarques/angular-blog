import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { SmallCardComponent } from './small-card.component';

class ParamMapStub {
  constructor(private paramMap: any) {}

  get(name: string): string | null {
    return this.paramMap[name];
  }
}

describe('SmallCardComponent', () => {
  let component: SmallCardComponent;
  let fixture: ComponentFixture<SmallCardComponent>;
  const paramMap = {
    get: (id: string) => '1'  
  };
  const activatedRouteStub = {
    paramMap: of((new ParamMapStub(paramMap) as unknown) as ParamMap)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmallCardComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(SmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should test minimum title', () => {
    expect(component.title.length).toBeLessThanOrEqual(0);
  });
});
