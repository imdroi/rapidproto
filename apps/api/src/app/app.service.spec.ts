import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return 2 Messages', () => {
      expect(service.getData()).toEqual([
        {"id": "1", "message": "Welcome to rapid proto api!"},
        {"id": "2", "message": "This is an example of fast prototyping"}
        ]);
    });
  });
});
