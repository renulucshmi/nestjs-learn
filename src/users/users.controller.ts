import { Controller, Get, Param, ParseIntPipe, Post, Query, DefaultValuePipe, ValidationPipe, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";

@Controller('users')
export class UsersController {
    usersService = new UsersService;

    constructor() {
        this.usersService = new UsersService();
    }
    @Get()
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number, @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
        console.log(limit, page);
        return this.usersService.getAllUsers();
    }
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: any) {
        //console.log(typeof id, id);
        return this.usersService.getUserById(id);
    }
    @Post()
    createUser(@Body() user: CreateUserDto) {


        // this.usersService.createUsers(user);
        return 'A new user with id ' + user.id + ' has been created';
    }
}