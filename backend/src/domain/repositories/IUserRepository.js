class IUserRepository {
  /**
   * @param {UserEntity} user
   * */
  async create(user) {
    throw new Error('Not implemented');
  }

  /**
   * @param {string} email
   * */
  async findByEmail(email) {
    throw new Error('Not implemented');
  }

  /**
   * @param {number} id
   * */
  async findById(id) {
    throw new Error('Not implemented');
  }
}

module.exports = IUserRepository;
