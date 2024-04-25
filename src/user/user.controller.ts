import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ){

    }

    @Post()
    async createNewUser(
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('userName') userName: string,
        @Body('password') password: string,

    ) {
        const generatedId = await this.userService.createNewUser(
          firstName,
          lastName,
          userName,
          password,
        );
        
        return {id: generatedId};
    }

    @Get('users')
    async getAllUsers() {
        return await this.userService.getAllUsers();
    }

    @Post('test')
    test() {
        return 'test';
    }
}
