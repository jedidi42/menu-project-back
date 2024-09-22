// src/services/menuService.ts
import menuRepository from '../repositories/menuRepository';

class MenuService {
  async createMenu(menuData: any) {
    return await menuRepository.create(menuData);
  }

  async getAllMenus() {
    return await menuRepository.findAll();
  }

  async getMenuById(id: number) {
    return await menuRepository.findById(id);
  }

  async getMenusByBusinessId(businessId: number) {
    return await menuRepository.findByBusinessId(businessId);
  }

  async updateMenu(id: number, menuData: any) {
    return await menuRepository.update(id, menuData);
  }

  async deleteMenu(id: number) {
    return await menuRepository.delete(id);
  }
}

export default new MenuService();