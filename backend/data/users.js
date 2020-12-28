import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('45678',10),
    },
    {
        name: 'Jane done',
        email: 'jane@example.com',
        password: bcrypt.hashSync('45678',10),
    },
]

export default users;