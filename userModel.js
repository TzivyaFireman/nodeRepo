const validator = require('validator');

class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static validateUser(user) {
        // Validate all required fields
        if (!user.id || !user.name || !user.email || !user.password) {
            throw new Error('All fields are required');
        }
      if (!validator.isEmail(user.email)) {
        throw new Error('Invalid email format');
      }
    }




    async addUser(user) {
        validateUser(user)
        return user;
    }
    async updateUser(id, user) {
        validateUser(user)
        return user;
    }
    async getUser(id) {
        if (!this.id)
            throw new Error('User not found', 400);

        return this;
    }
    async deleteUser(id) {
        return user;
    }

}




module.exports = User;
