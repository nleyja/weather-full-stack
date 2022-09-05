import Router from "express";
import { getCity, addCity } from "../controllers/forecastController.js";

const router = Router();

router.get("/", getCity);
router.post("/", addCity);

export default router;