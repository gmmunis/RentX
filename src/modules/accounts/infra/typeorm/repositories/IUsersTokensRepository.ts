import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { Usertokens } from "../entities/UserTokens";

interface IUsersTokensRepository {
    create({ expires_date, refresh_token, user_id}: ICreateUserTokenDTO): Promise<Usertokens>;
}

export { IUsersTokensRepository };