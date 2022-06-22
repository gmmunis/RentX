import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendForgotPasswordMailuseCase } from "./SendForgotPasswordMailuseCase";

class SendForgotPasswordMailController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;
        const sendForgotPasswordMailuseCase = container.resolve(SendForgotPasswordMailuseCase);

        await sendForgotPasswordMailuseCase.execute(email);

        return response.send();
    }
}

export { SendForgotPasswordMailController };