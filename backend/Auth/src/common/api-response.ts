import { Response } from "express";
class ApiResponse{
    static success<T>(res: Response, message = "success", data: T){
        return res.status(200).json({
            success: true,
            data,
            message,
        })
    }

    static created<T>(res: Response, message = "Created Successfully", data: T){
        return res.status(201).json({
            success: true,
            data,
            message
        })
    }

    static noContent(res: Response){
        return res.status(204).send();
    }
}

export default ApiResponse;