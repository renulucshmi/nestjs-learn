import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return 'You made a GET request to get all users !'
    }
    @Post()
    createUser() {
        return 'You made a POST request to create a user !'
    }
}