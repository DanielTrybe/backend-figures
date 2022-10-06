import express from "express";
import { routerGet, routerPost } from "./routes";

const app = express();

app.use(express.json());
app.use(routerGet, routerPost);

export { app };
