import { Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        const usersService = new UsersService();
        return usersService.getAllUsers();
    }
    @Get(':id/:name/:gender')
    getUserById(@Param('id') id: number) {
        console.log(Param);
        return id;
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
        return 'A new user has been created   '
    }
}