import { Controller, Get, Param, ParseIntPipe, Post, Query, DefaultValuePipe, ValidationPipe, Body, ParseBoolPipe, Patch } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { GetUserParamDto } from "./dtos/get-user-param.dto";

@Controller('users')
export class UsersController {
 

    constructor(private usersService:UsersService) {
    }
    @Get(':isMarried')
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number, @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        //console.log(limit, page);
        @Param() param: GetUserParamDto) {
        console.log(param);
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
        console.log(typeof user);
        return 'A new user with id ' + user.id + ' has been created';
    }
    @Patch()
    updateUser(@Body() user: UpdateUserDto) {
        console.log(user);
    return 'user updated successfully';
}
}


