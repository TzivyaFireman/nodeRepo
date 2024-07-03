class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    async addUser(user) {
        return user;
    }
    async updateUser(id, user) {
        return user;
    }
    async getUser(id) {
        return user;
    }
    async deleteUser(id) {
        return user;
    }
}
module.exports = Product;
