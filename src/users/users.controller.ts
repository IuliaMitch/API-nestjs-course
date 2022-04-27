import { Controller } from '@nestjs/common';
import { User } from './shared/user';
import { UserService } from './shared/user.service';
import {  Get, Param, Body, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UserService
    ) { }

    @Get()
    async getAll(): Promise<User[]> {
        return await this.usersService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<User> {
        return await this.usersService.getById(id);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.usersService.create(user);
    }

    @Put()
    async update(@Param('id') id: string, @Body() user: User): Promise<User> {
        return await this.usersService.update(id, user)
    }
}
