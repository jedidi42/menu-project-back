// src/models/associations.ts

import Address from "./address";
import Banner from "./Banner";
import Brand from "./Brand";
import Business from "./Business";
import Category from "./Category";
import Item from "./item";
import ItemList from "./ItemList";
import Menu from "./Menu";
import User from "./user";

// User and Business
User.hasMany(Business, { foreignKey: "userId" });
Business.belongsTo(User, { foreignKey: "userId" });

// Business and Address
Business.hasOne(Address, { foreignKey: "businessId" });
Address.belongsTo(Business, { foreignKey: "businessId" });

// Business and Category
Business.hasMany(Category, { foreignKey: "businessId" });
Category.belongsTo(Business, { foreignKey: "businessId" });

// Business and Menu
Business.hasMany(Menu, { foreignKey: "businessId" });
Menu.belongsTo(Business, { foreignKey: "businessId" });

// Category and ItemList
Category.hasMany(ItemList, { foreignKey: "categoryId" });
ItemList.belongsTo(Category, { foreignKey: "categoryId" });

// ItemList and Item
ItemList.hasMany(Item, { foreignKey: "itemListId" });
Item.belongsTo(ItemList, { foreignKey: "itemListId" });

// Menu and Banner
Menu.hasMany(Banner, { foreignKey: "menuId" });
Banner.belongsTo(Menu, { foreignKey: "menuId" });

// Business and Brand
Business.hasOne(Brand, { foreignKey: "businessId" });
Brand.belongsTo(Business, { foreignKey: "businessId" });
