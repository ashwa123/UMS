import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let routerOutletTag: DebugElement;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
    routerOutletTag = fixture.debugElement.nativeElement.querySelector(
      'router-outlet'
    );
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Checking presence of routerOutletTag', () => {
    expect(routerOutletTag).toBeTruthy();
  });

  // it('Cheking for proper positioning of routerOutlet', () => {
  //   const tag = fixture.nativeElement.querySelector(
  //     '.container-fluid router-outlet'
  //   );
  //   expect(tag).not.toBe(null);
  // });
});

