import { Injectable } from '@nestjs/common';
import { UsersRepositories } from './users.repositories';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  constructor(private readonly usersRepositories: UsersRepositories) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepositories.create(createUserDto);
  }

  findAll() {
    return this.usersRepositories.findAll();
  }

  findOne(id: number) {
    return this.usersRepositories.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepositories.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepositories.remove(id);
  }
}
