import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/Implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/Mailprovider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";
import { SendForgotPasswordMailuseCase } from "./SendForgotPasswordMailuseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailuseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let dateprovider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send Forgot Mail", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        dateprovider = new DayjsDateProvider();
        usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
        mailProvider = new MailProviderInMemory();
        sendForgotPasswordMailUseCase = new SendForgotPasswordMailuseCase(userRepositoryInMemory,
            usersTokensRepositoryInMemory,
            dateprovider,
            mailProvider
        );
    })

    it("should be able to send a forgot password mail to user", async () => {
        const sendMail = jest.spyOn(mailProvider, "sendMail");

        await userRepositoryInMemory.create({
            driver_license: "664168",
            email: "gui@mail.com",
            name: "Gui Munis",
            password: "1234",
        });

        await sendForgotPasswordMailUseCase.execute("gui@mail.com");

        expect(sendMail).toHaveBeenCalled();
    });

    it("should not be able to send an email if user does not exists", async () => {
        await expect(
            sendForgotPasswordMailUseCase.execute("ka@uj.gr")
        ).rejects.toEqual(new AppError("User does not exists"));
    });

    it("should be able to create an users token", async () => {
        const generateTokenmail = jest.spyOn(usersTokensRepositoryInMemory, "create");

        userRepositoryInMemory.create({
            driver_license: "787330",
            email: "geo@mail.com",
            name: "Geovana Munis",
            password: "1234",
        });

        await sendForgotPasswordMailUseCase.execute("geo@mail.com");

        expect(generateTokenmail).toBeCalled();
    });
});

