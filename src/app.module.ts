import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [userModule, TweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
