import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return 2 Messages', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual(
        [
          { id: "1", message: 'Welcome to rapid proto api!' },
          { id: "2", message: 'This is an example of fast prototyping'}
        ]);
    });
  });
});
