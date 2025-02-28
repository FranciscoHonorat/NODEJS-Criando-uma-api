import express from 'express';
import conectaNaDataBase from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro ao conectar no banco de dados", erro)
});

conexao.once("open", () => {
    console.log("Conectado no banco de dados")
});

const app = express();
routes(app);

export default app;

//acabamos de fazer um CRUD com o express.