import { IsEmail, IsNotEmpty } from 'class-validator';

export class User {
  id: number;

  @IsNotEmpty()
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty()
  password: string;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static validateUser(user: User) {
    if (!user.id || !user.name || !user.email || !user.password) {
      throw new Error('All fields are required');
    }
  }
}
