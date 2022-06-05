import express from "express";
import cors from "cors";
import { routes } from "./routes";

const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(routes);

app.listen(3333, () => {
  console.log("server is running babe");
});
