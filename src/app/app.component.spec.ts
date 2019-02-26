import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';    

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockFooterComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have header subcomponent', () => {
    const header = fixture.debugElement.query(By.directive(MockHeaderComponent));;
    expect(header).toBeTruthy();
  });

  it('should have footer subcomponent', () => {
    const footer = fixture.debugElement.query(By.directive(MockFooterComponent));;
    expect(footer).toBeTruthy();
  });
});

@Component({
  selector: 'app-header',
  template: ''
})
class MockHeaderComponent {}

@Component({
  selector: 'app-footer',
  template: ''
})
class MockFooterComponent {}
