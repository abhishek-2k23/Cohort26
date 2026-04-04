import ApiError from "../../common/api-error";
import ApiResponse from "../../common/api-response";
import AuthService from "./auth.service";
import type { Request, Response } from "express";

class AuthController{
    async registerController(req: Request, res: Response){

        try{
            const result = await AuthService.register(req.body);
            return ApiResponse.created(res, "You are registered Successfully", result);
        }catch(error){
            console.log(error)
            if(error instanceof ApiError){
                return res.status(error.status).json({
                    success: false,
                    message: error.message
                });
            }
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            });
        }
    }

    async loginController(req: Request, res: Response){

    }
}

export default AuthController;