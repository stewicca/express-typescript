import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

router.get("/about", (req: Request, res: Response) => {
  res.send("About");
});

router.get("/contact", (req: Request, res: Response) => {
  res.send("Contact");
});

export default router;
