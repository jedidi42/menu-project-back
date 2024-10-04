// src/routes/menuNoSqlRoutes.ts
import { Router } from "express";
import menuNoSqlService from "../services/menuNoSqlService";

const router = Router();

// Create a new menu
router.post("/menus", async (req, res) => {
  try {
    const menu = await menuNoSqlService.createMenu(req.body);
    res.status(201).json(menu);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Get all menus
router.get("/menus", async (req, res) => {
  try {
    const menus = await menuNoSqlService.getAllMenus();
    res.status(200).json(menus);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Get a menu by ID
router.get("/menus/:id", async (req, res) => {
  try {
    const menu = await menuNoSqlService.getMenuById(
      parseInt(req.params.id, 10)
    );
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ error: "Menu not found" });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Update a menu by ID
router.put("/menus/:id", async (req, res) => {
  try {
    const menu = await menuNoSqlService.updateMenu(
      parseInt(req.params.id, 10),
      req.body
    );
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ error: "Menu not found" });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a menu by ID
router.delete("/menus/:id", async (req, res) => {
  try {
    const success = await menuNoSqlService.deleteMenu(
      parseInt(req.params.id, 10)
    );
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Menu not found" });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
