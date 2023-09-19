// import "reflect-metadata";
// import express from "express";
// import cors from "cors";
// import routers from "./routers/index";

import app from "./app";
import ormconfig from "./ormconfig";

// const app = express();

// app.use(cors());

// app.use(express.json());

// app.use(routers);
ormconfig
  .initialize()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("server not started");
  });
