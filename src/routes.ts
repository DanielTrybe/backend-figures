import { Router } from "express";

const router = Router();

router.get("/figures", (req, res) => {
  return res.send();
});

export { router };
