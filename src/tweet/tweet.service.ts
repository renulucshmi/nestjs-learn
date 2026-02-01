import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly usersService: UsersService) {

    }
    tweets: { text: string, date: Date, userId: number }[] = [{ text: "Hello", date: new Date('2026-01-29'), userId: 1 },
    { text: "Hello", date: new Date('2026-01-29'), userId: 1 },

    { text: "Hi", date: new Date('2026-01-29'), userId: 2 }];

    getTweets(userId: number) {
        const user = this.usersService.getUserById(userId);
        if (!user) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        }
        const tweets = this.tweets.filter(t => t.userId === userId);
        const response = tweets.map(t => { return { text: t.text, date: t.date, name: user.name } })
        return response;
    }

}
