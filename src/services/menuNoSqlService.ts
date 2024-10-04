// src/services/menuNoSqlService.ts
import menuNoSqlRepository from "../repositories/menuNoSqlRepository";

class MenuNoSqlService {
  async createMenu(menuData: any) {
    return await menuNoSqlRepository.create(menuData);
  }

  async getAllMenus() {
    return await menuNoSqlRepository.findAll();
  }

  async getMenuById(id: number) {
    return await menuNoSqlRepository.findById(id);
  }

  async updateMenu(id: number, menuData: any) {
    return await menuNoSqlRepository.update(id, menuData);
  }

  async deleteMenu(id: number) {
    return await menuNoSqlRepository.delete(id);
  }
}

export default new MenuNoSqlService();
