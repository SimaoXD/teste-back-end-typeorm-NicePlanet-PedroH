import "reflect-metadata";
import express from "express";
import cors from "cors";
import routers from "./routers/index";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routers);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
