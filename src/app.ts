import express from "express";
import { routerGet, routerPost, routerPut } from "./routes";

const app = express();

app.use(express.json());
app.use(routerGet, routerPost, routerPut);

export { app };
