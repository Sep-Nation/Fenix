import { Router, Request, Response } from "express";

const router = Router();

router.get('/fire', (req: Request, res: Response) => {
  return res.json({ 
    project: "fenix",
    authors: "Lucas D, Eduardo R"  
  })
})

export { router };