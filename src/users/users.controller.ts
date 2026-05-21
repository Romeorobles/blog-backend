import { Body, Controller, Delete, Get, Param, Post, Put, Query, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { QueryDto } from '../common/dto/dto/QueryDto.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() dto: CreateUserDto) {
    const user = await this.usersService.create(dto);
    return new SuccessResponseDto('User created successfully', user);
    }

    @Get()
    async findAll(@Query() query: QueryDto) {
    const result = await this.usersService.findAll(query);
    return new SuccessResponseDto('Users retrieved successfully', result);
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    const user = await this.usersService.update(id, dto);
    if (!user) throw new NotFoundException('User not found');
    return new SuccessResponseDto('User updated successfully', user);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
    const user = await this.usersService.remove(id);
    if (!user) throw new NotFoundException('User not found');
    return new SuccessResponseDto('User deleted successfully', user);
    }
}