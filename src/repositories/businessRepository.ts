import Business from "../models/business";

class BusinessRepository {
  async createBusiness(data: any) {
    return Business.create(data);
  }

  async getBusinessById(id: number) {
    return Business.findByPk(id);
  }

  async updateBusiness(id: number, data: any) {
    return Business.update(data, { where: { id } });
  }

  async deleteBusiness(id: number) {
    return Business.destroy({ where: { id } });
  }

  async getAllBusinesses() {
    return Business.findAll();
  }
}

export default new BusinessRepository();
