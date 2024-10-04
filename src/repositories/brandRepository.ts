// src/repositories/brandRepository.ts
import Brand from "../models/brand";

class BrandRepository {
  async create(brandData: any) {
    return await Brand.create(brandData);
  }

  async findAll() {
    return await Brand.findAll();
  }

  async findById(id: number) {
    return await Brand.findByPk(id);
  }

  async update(id: number, brandData: any) {
    const brand = await Brand.findByPk(id);
    if (brand) {
      return await brand.update(brandData);
    }
    return null;
  }

  async delete(id: number) {
    const brand = await Brand.findByPk(id);
    if (brand) {
      await brand.destroy();
      return true;
    }
    return false;
  }
}

export default new BrandRepository();
