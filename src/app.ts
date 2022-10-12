import express from "express";
import { routerGet, routerPost, routerPut, routerDelete } from "./routes";

const app = express();

app.use(express.json());
app.use(routerGet, routerPost, routerPut, routerDelete);

export { app };
