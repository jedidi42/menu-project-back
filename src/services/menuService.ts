// src/services/menuService.ts
import brandRepository from "../repositories/brandRepository";
import menuRepository from "../repositories/menuRepository";
import menuNoSqlRepository from "../repositories/menuNoSqlRepository"; // Import the NoSQL repository

class MenuService {
  async createMenu(menuData: any) {
    const menu = await menuRepository.create(menuData);
    await brandRepository.create({
      menuId: menu.id,
      primaryColor: "#780000", // Set default values or get from menuData
      secondaryColor: "#BB3E03",
      font: "1",
    });

    // Create a corresponding NoSQL object
    await menuNoSqlRepository.create({
      menuId: menu.id,
      categories: [
        {
          name: "Appetizers",
          description: "Start your meal with our delicious appetizers",
          items: [
            {
              name: "Spring Rolls",
              description: "Crispy spring rolls with a savory filling",
              price: 5.99,
            },
          ],
        },
        {
          name: "drinks",
          description: "Have a drink",
          items: [
            {
              name: "coffe",
              description: "express 3a9da",
              price: 5.99,
            },
          ],
        },
      ],
    });

    return menu;
  }

  async getAllMenus() {
    return await menuRepository.findAll();
  }

  async getMenuById(id: number) {
    let res = await menuRepository.findById(id);
    let resData = res?.dataValues;
    let Content = await menuNoSqlRepository.findById(id);
    return { ...resData, content: Content };
  }

  async getMenusByBusinessId(businessId: number) {
    return await menuRepository.findByBusinessId(businessId);
  }

  async updateMenu(id: number, menuData: any) {
    const menu = await menuRepository.update(id, menuData);

    // Update the corresponding NoSQL object
    await menuNoSqlRepository.update(id, {
      menuId: id,
      categories: [], // Update categories as needed
    });

    return menu;
  }
  async deleteMenu(id: number) {
    let res = await menuRepository.delete(id);

    // Delete the corresponding NoSQL object
    await menuNoSqlRepository.delete(id);
    return res;
  }
}

export default new MenuService();
