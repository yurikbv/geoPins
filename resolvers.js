const user = {
  _id: '1',
  name: 'Yuriy',
  email: 'yurikbv@yandex.com',
  picture: 'https://cloudinary.com/asdf'
};

module.exports = {
  Query: {
    me: () => user
  }
};