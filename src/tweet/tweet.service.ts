import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private usersService: UsersService) {

    }
    tweets: { text: string, date: Date, userId: number }[] = [{ text: "Hello", date: new Date('2026-01-29'), userId: 1 },
    { text: "Hi", date: new Date('2026-01-29'), userId: 2 }];
    getTweet(userId: Number) {
        const user = this.usersService.getUserById(userId);

        return this.tweets.filter(t => t.userId === userId);
    }
}
