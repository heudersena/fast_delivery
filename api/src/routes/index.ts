import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "api" });
});

export default router;