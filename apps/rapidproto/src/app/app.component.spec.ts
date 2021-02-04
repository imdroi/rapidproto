import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WelcomeMessageService } from './welcome-message.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MockProvider } from 'ng-mocks';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        MockProvider(WelcomeMessageService),
        MockProvider(MatSnackBar)
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
