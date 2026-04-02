import { createServer } from "node:http";
import * as dotenv from 'dotenv';
import { createApplication } from "./app";
dotenv.config();

const port = process.env.port || 8080

async function main() {
    try{
        const server = createServer(createApplication);
        server.listen(port, () => {
            console.log(`Http server is running on PORT ${port}`)
        })
    }catch(error){
        console.log("Error in starting http server")
        throw error;
    }
}

main();