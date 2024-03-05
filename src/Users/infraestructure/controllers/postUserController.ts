import type { CreateUserUseCase } from "../../application/useCases/CreateUserUseCase.ts";
import type { NextFunction, Request, Response } from "express";

export class PostUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  execute = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await this.createUserUseCase.execute(
        req.body.companyName as string,
        req.body.CIF as string,
        req.body.email as string,
        req.body.password as string,
        req.body.phone as string,
        req.body.address as string,
        req.body.city as string,
        req.body.country as string,
        req.body.province as string,
        req.body.postalCode as string,
        req.body.role as string,
        (req.body.web ?? undefined) as string || undefined
      );
      res.status(200).send({
        status: "Ok",
        message: "Usuario creado correctamente",
      });
    } catch (error) {
      next(error);
    }
  };
}
