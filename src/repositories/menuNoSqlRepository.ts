// src/repositories/menuNoSqlRepository.ts
import Menu from "../models/menuNoSql";

class MenuNoSqlRepository {
  async create(menuData: any) {
    const menu = new Menu(menuData);
    return await menu.save();
  }

  async findAll() {
    return await Menu.find();
  }

  async findById(id: number) {
    return await Menu.findOne({ menuId: id });
  }

  async update(id: number, menuData: any) {
    return await Menu.findOneAndUpdate({ menuId: id }, menuData, { new: true });
  }

  async delete(id: number) {
    return await Menu.findOneAndDelete({ menuId: id });
  }
}

export default new MenuNoSqlRepository();
