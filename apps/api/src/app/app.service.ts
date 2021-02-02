import { Injectable } from '@nestjs/common';
import { Message } from '@rapidproto/api-interfaces';

@Injectable()
export class AppService {
  public getData(): Message[] {
    return [
      { id: "1", message: 'Welcome to rapid proto api!' },
      { id: "2", message: 'This is an example of fast prototyping'}
      ];
  }
}
