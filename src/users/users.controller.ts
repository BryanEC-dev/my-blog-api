import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  private users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];

  @Get() getAllUsers() {
    return this.users;
  }

  @Get(':id') getUserById(@Param('id') id: number) {
    // Implementation to get user by ID
    return this.users.find((user) => user.id == id);
  }
}
