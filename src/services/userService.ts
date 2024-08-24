import userRepository from "../repositories/userRepository";

class UserService {
  async createUser(data: any) {
    return userRepository.createUser(data);
  }

  async getUserById(id: number) {
    return userRepository.getUserById(id);
  }

  // Add more service methods as needed
}

export default new UserService();
