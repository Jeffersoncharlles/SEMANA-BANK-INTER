import { Request, Response } from "express";
import { UserService } from "./user.service";


class UserController {
    async signin(req: Request, res: Response) {
        const { email, password } = req.body;
        const userService = new UserService();

        const users = await userService.signin({ email, password });

        return res.status(200).json(users);
    }
    async signup(req: Request, res: Response) {
        return res.send("criando com o usuario")
    }

}

export { UserController }