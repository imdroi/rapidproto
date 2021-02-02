import { Controller, Get } from '@nestjs/common';

import { Message } from '@rapidproto/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {

  public constructor(
    private readonly appService: AppService
  ) {}

  @Get('messages')
  public getData(): Message[] {
    return this.appService.getData();
  }
}
