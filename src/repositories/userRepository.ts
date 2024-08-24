import User from "../models/user";

class UserRepository {
  async createUser(data: any) {
    return User.create(data);
  }

  async getUserById(id: number) {
    return User.findByPk(id);
  }

  // Add more repository methods as needed
}

export default new UserRepository();
