import "reflect-metadata";
import "express-async-errors";
import express from "express";

import { handleErrors } from "./errors/AppError";
import sessionRouter from "./routers/session.routers";
import usuarioRouter from "./routers/usuario.routers";

const app = express();

app.use(express.json());

app.use("/login", sessionRouter);
app.use("/usuarios", usuarioRouter);

app.use(handleErrors);

export default app;
