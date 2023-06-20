import { Router } from "express";
import { usersController } from "./controllers/userController.js";

const routes = Router();

// GET - Ler dados, POST - Adicionar dados, PUT/PATCH - Editar dados, DELETE - Deletar dados
// STATUS CODE | 200 - Ok, 201 - Created, 404 - Página não encontrada

routes.get("/users", usersController.listarUsarios);

routes.post("/users", usersController.criarUsuario);

export { routes };
