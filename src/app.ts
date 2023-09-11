import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { usuarioRouter, sessionRouter } from "./routers";
import { handleErrors } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use("/login", sessionRouter);
app.use("/usuarios", usuarioRouter);

app.use(handleErrors);

export default app;
