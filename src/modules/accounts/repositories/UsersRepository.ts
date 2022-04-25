import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "./implementations/IUsersRepository";


class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password, driver_license}: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }

  async list(): Promise<User[]> {
    const user = await this.repository.find();
    return user;
  }

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne({ name });
    return user;
  }
}

export { UsersRepository };