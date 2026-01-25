import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './users/users.module';

@Module({
  imports: [userModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
