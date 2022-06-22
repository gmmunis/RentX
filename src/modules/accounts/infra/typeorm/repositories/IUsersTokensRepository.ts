import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { Usertokens } from "../entities/UserTokens";

interface IUsersTokensRepository {
    create({ expires_date, refresh_token, user_id}: ICreateUserTokenDTO): Promise<Usertokens>;
    findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<Usertokens>;
    deleteById(id: string): Promise<void>;
}

export { IUsersTokensRepository };