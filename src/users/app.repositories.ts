import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const users = []
@Injectable()
export class UsersRepositories {
  create(createUserDto: CreateUserDto) {
    users.push(createUserDto);
    return 'Usuario Criado!';
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    return users.find(u => u.id === id);;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    users.find(u => u.id === id).update(updateUserDto);
    return 'Usuario Atualizado';
  }

  remove(id: number) {
    return 'Usuario Removido!';
  }
}
