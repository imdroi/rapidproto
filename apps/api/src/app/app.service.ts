import { Injectable } from '@nestjs/common';
import { Message } from '@rapidproto/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to rapid proto api!' };
  }
}
