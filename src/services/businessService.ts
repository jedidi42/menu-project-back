
import BusinessRepository from '../repositories/businessRepository';

class BusinessService {
  async createBusiness(data: any) {
    return BusinessRepository.createBusiness(data);
  }

  async getBusinessById(id: number) {
    return BusinessRepository.getBusinessById(id);
  }

  async updateBusiness(id: number, data: any) {
    return BusinessRepository.updateBusiness(id, data);
  }

  async deleteBusiness(id: number) {
    return BusinessRepository.deleteBusiness(id);
  }

  async getAllBusinesses() {
    return BusinessRepository.getAllBusinesses();
  }
}

export default new BusinessService();