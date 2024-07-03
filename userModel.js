class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static validateUser(user) {

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
        return user;
    }
    async deleteUser(id) {
        return user;
    }

}

module.exports = User;
