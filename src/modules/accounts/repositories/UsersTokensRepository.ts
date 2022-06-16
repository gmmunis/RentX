import { getRepository, Repository } from "typeorm";
import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { Usertokens } from "../infra/typeorm/entities/UserTokens";
import { IUsersTokensRepository } from "../infra/typeorm/repositories/IUsersTokensRepository";

class UsersTokensRepository implements IUsersTokensRepository {
    private repository: Repository<Usertokens>;

    constructor() {
        this.repository = getRepository(Usertokens);
    }

    async create({ expires_date, refresh_token, user_id }: ICreateUserTokenDTO): Promise<Usertokens> {
        const userToken = this.repository.create({ expires_date, refresh_token, user_id });

        await this.repository.save(userToken);

        return userToken;
    }
}

export { UsersTokensRepository };