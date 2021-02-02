import { Component, OnInit } from '@angular/core';
import { WelcomeMessageService } from './welcome-message.service';
import { Observable } from 'rxjs';
import { Message } from '@rapidproto/api-interfaces';

@Component({
  selector: 'rapidproto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public readonly hellos$: Observable<Message[]> = this.welcomeMessageService.entities$

  public constructor(
    private welcomeMessageService : WelcomeMessageService
  ) {}

  public ngOnInit(): void {
    this.publicLoadMessages();
  }

  public publicLoadMessages(): void {
    this.welcomeMessageService.getAll();
  }
}
