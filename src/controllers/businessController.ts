import { Request, Response } from "express";
import BusinessService from "../services/businessService"; // Import the BusinessService class from the appropriate file

class BusinessController {
  async createBusiness(req: Request, res: Response) {
    try {
      const business = await BusinessService.createBusiness(req.body);
      res.status(201).json(business);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getBusinessById(req: Request, res: Response) {
    try {
      const business = await BusinessService.getBusinessById(
        Number(req.params.id)
      );
      if (business) {
        res.status(200).json(business);
      } else {
        res.status(404).json({ message: "Business not found" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateBusiness(req: Request, res: Response) {
    try {
      const business = await BusinessService.updateBusiness(
        Number(req.params.id),
        req.body
      );
      if (business[0] > 0) {
        res.status(200).json({ message: "Business updated successfully" });
      } else {
        res.status(404).json({ message: "Business not found" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteBusiness(req: Request, res: Response) {
    try {
      const result = await BusinessService.deleteBusiness(
        Number(req.params.id)
      );
      if (result) {
        res.status(200).json({ message: "Business deleted successfully" });
      } else {
        res.status(404).json({ message: "Business not found" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllBusinesses(req: Request, res: Response) {
    try {
      const businesses = await BusinessService.getAllBusinesses();
      res.status(200).json(businesses);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new BusinessController();
