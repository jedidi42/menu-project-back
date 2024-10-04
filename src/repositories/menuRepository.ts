// src/repositories/menuRepository.ts
import Brand from "../models/brand";
import Menu from "../models/menu";

class MenuRepository {
  async create(menuData: any) {
    return await Menu.create(menuData);
  }

  async findAll() {
    return await Menu.findAll();
  }

  async findById(id: number) {
    return await Menu.findByPk(id, {
      include: [Brand],
    });
  }

  async findByBusinessId(businessId: number) {
    return await Menu.findAll({
      where: { businessId },
      include: [Brand],
    });
  }

  async update(id: number, menuData: any) {
    const menu = await Menu.findByPk(id, {
      include: [Brand],
    });
    if (menu) {
      const updatedMenu = await menu.update(menuData);
      if (menuData.Brands && menuData.Brands.length > 0) {
        for (const brandData of menuData.Brands) {
          const brand = await Brand.findByPk(brandData.id);
          if (brand) {
            await brand.update(brandData);
          }
        }
      }
      return updatedMenu;
    }
    return null;
  }

  async delete(id: number) {
    const menu = await Menu.findByPk(id);
    if (menu) {
      await menu.destroy();
      return true;
    }
    return false;
  }
}

export default new MenuRepository();
