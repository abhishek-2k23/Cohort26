import express  from "express";
import type { Express } from "express";
import router from "../modules/auth/auth.route";

export function createApplication() : Express {
    const app = express();

    app.use(express.json())
    app.get("/", (req, res) => {
        return res.json({message: "Welcome to auth service"});
    })

    app.use('/auth', router)

    return app;
}