import express, { json } from "express";
import { routes } from "./routes.js";

const server = express();
server.use(json());
server.use(routes);

server.listen(3000, () => {
    console.log("Server running in port 3000");
});
