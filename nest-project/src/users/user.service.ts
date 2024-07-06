import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  async addUser(user: any): Promise<string> {
    User.validateUser(user);
    const newUser = new User(user.id, user.name, user.email, user.password);
    this.users.push(newUser);
    return 'User added successfully';
  }

  async updateUser(id: number, user: any): Promise<any> {
    User.validateUser(user);
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      console.log('User not found');
    }
    this.users[userIndex] = { ...user, id };
    return 'User updated successfully';
  }

  async getUser(id: number): Promise<any> {

    const user = this.users.find(u => u.id === id);

    if (!user) {
        console.log('User not found');
        return undefined;
    }
    return "hello"+user;
  }

  async deleteUser(id: number): Promise<string> {
    this.users = this.users.filter(u => u.id !== id);
    return 'User deleted successfully';
  }
}
