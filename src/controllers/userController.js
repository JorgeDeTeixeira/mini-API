import { database } from "../database.js";

const usersController = {
    listarUsarios(req, res) {
        return res.status(200).json(database);
    },

    criarUsuario(req, res) {
        const { name } = req.body;

        if (name.length < 1) {
            return res
                .status(403)
                .json({ message: `impossível criar user sem nome.` });
        }

        database.push(name);
        return res
            .status(201)
            .json({ message: `${name} adicionado com sucesso ao array!` });
    },
};

export { usersController };
