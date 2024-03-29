import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


export class UsersRepositories {
  private users = []
  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return 'Usuario Criado!';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id == id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex(user => user.id == id);
    this.users[userIndex] = updateUserDto;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex(user => user.id == id);
    this.users[userIndex].remove();
  }
}
