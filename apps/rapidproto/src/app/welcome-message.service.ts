import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Message } from '@rapidproto/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class WelcomeMessageService extends EntityCollectionServiceBase<Message> {

  public constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Message', serviceElementsFactory);
  }
}
