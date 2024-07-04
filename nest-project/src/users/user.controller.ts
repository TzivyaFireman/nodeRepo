import { Controller, Post, Put, Get, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('addUser')
  addUser(@Body() user: any) {
    
    return this.userService.addUser(user);
  }

  @Put('updateUser/:id')
  updateUser(@Param('id') id: string, @Body() user: any) {
    return this.userService.updateUser(Number(id), user);
  }

  @Get('getUser/:id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(Number(id));
  }

  @Delete('deleteUser/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }
}
