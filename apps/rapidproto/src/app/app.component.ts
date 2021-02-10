import { Component, Inject, OnInit } from '@angular/core';
import { WelcomeMessageService } from './welcome-message.service';
import { Observable } from 'rxjs';
import { Message } from '@rapidproto/api-interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'rapidproto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public readonly hellos$: Observable<Message[]> = this.welcomeMessageService.entities$

  public constructor(
    private readonly welcomeMessageService : WelcomeMessageService,
    private readonly _snackBar: MatSnackBar,
    @Inject('BACKEND_API_ROOT')
    private readonly backendUrl: string,
  ) {
    // eslint-disable-next-line no-console
    console.log('BACKEND_API_ROOT:', backendUrl);
  }

  public ngOnInit(): void {
    this.publicLoadMessages();
  }

  public publicLoadMessages(): void {
    this.welcomeMessageService.getAll();
  }

  public openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
