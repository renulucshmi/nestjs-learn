import { Test, TestingModule } from '@nestjs/testing';
import { TweetService } from './tweet.service';
import { UsersService } from '../users/users.service';

describe('TweetService', () => {
  let service: TweetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetService, {
        provide: UsersService,
        useValue: {
          getUserById: jest.fn()
        }
      }],
    }).compile();

    service = module.get<TweetService>(TweetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
