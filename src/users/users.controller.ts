import { Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        const usersService = new UsersService();
        return usersService.getAllUsers();
    }
    @Post()
    createUser() {
        const user = {
            id: 3,
            name: "Adeepa",
            age: 23,
            gender: "male",
            isMarried: false
        }
        const usersService = new UsersService();
        usersService.createUsers(user);
        return 'A new user has been created'
    }
}