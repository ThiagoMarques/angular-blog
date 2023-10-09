import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';

class ParamMapStub {
  constructor(private paramMap: any) {}

  get(name: string): string | null {
    return this.paramMap[name];
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const paramMap = {
    get: (id: string) => '1'  
  };
  const activatedRouteStub = {
    paramMap: of((new ParamMapStub(paramMap) as unknown) as ParamMap)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should test blog title', () => {
    expect(component.titleBlog).toEqual('Angular Blog');
  });

  it('Should test integrity of data fake', () => {
    expect(component.dataNews).toBeTruthy();
  });

  it('Should test minimum data fake', () => {
    expect(component.dataNews.length).toBeGreaterThanOrEqual(1);
  });
});
