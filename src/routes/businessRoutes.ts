import { Router } from "express";
import businessController from "../controllers/businessController";

const router = Router();

router.post("/businesses", businessController.createBusiness);
router.get("/businesses/:id", businessController.getBusinessById);
router.put("/businesses/:id", businessController.updateBusiness);
router.delete("/businesses/:id", businessController.deleteBusiness);
router.get("/businesses", businessController.getAllBusinesses);

export default router;
