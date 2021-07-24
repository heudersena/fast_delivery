import express from "express";
import router from "./routes";
import path from "path";
const app = express();

app.set("port", 3000);

app.use(router);

app.listen(app.get("port"), "0.0.0.0", () =>
  console.log(`http://localhot:${app.get("port")}`)
);
