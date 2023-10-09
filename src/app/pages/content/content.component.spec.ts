import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';

class ParamMapStub {
  constructor(private paramMap: any) {}

  get(name: string): string | null {
    return this.paramMap[name];
  }
}

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  const paramMap = {
    get: (id: string) => '1'  
  };
  const activatedRouteStub = {
    paramMap: of((new ParamMapStub(paramMap) as unknown) as ParamMap)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContentComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should test minimum title', () => {
    expect(component.titleContent.length).toBeLessThanOrEqual(0);
  });
  it('Should test minimum description', () => {
    expect(component.description.length).toBeLessThanOrEqual(0);
  });
  it('Should test minimum text', () => {
    expect(component.text.length).toBeLessThanOrEqual(0);
  });
});
