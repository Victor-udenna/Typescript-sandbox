type UserRole = 'admin' | 'user' | 'guest';

type User = {
  username: string;
  userrole: UserRole;
};

const users: User[] = [
  {
    username: 'john',
    userrole: 'admin'
  },
  {
    username: 'jane',
    userrole: 'user'
  }
];

const findUser = (username: string) : User | undefined => {
  return users.find((user) => user.username === username);
};
