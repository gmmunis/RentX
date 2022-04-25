import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";

interface IUsersRepository {
  create({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };