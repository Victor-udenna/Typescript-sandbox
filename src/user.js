"use strict";
const users = [
    {
        username: 'john',
        userrole: 'admin'
    },
    {
        username: 'jane',
        userrole: 'user'
    }
];
const findUser = (username) => {
    return users.find((user) => user.username === username);
};
