// src/repositories/menuRepository.ts
import Menu from '../models/menu';

class MenuRepository {
  async create(menuData: any) {
    return await Menu.create(menuData);
  }

  async findAll() {
    return await Menu.findAll();
  }

  async findById(id: number) {
    return await Menu.findByPk(id);
  }

  async findByBusinessId(businessId: number) {
    return await Menu.findAll({
      where: { businessId },
    });
  }

  async update(id: number, menuData: any) {
    const menu = await Menu.findByPk(id);
    if (menu) {
      return await menu.update(menuData);
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