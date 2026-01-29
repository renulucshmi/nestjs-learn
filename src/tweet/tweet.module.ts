import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { userModule } from 'src/users/users.module';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports:[userModule]
})
export class TweetModule {}
