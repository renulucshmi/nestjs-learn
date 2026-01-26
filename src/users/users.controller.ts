import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    @Get()
    getUsers(@Query() query: any) {
        const usersService = new UsersService();
        console.log(query);
        return usersService.getAllUsers();
    }
    @Get(':id')
    getUserById(@Param('id') id: any) {
        const usersService = new UsersService();
        return usersService.getUserById(+id);
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