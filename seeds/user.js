const { User } = require('../models');

const userData = [
    {
        username: 'tommyShelby',
        password: 'password1',
    },
    {
        username: "donDraper",
        password: "password2",
    },
    {
        username: "elliotAlderson",
        password: "password3"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;