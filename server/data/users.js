const bcrypt = require("bcryptjs")

const users = [
  {
    name: "Mark Maksi",
    email: "markmaksi@outlook.com",
    password: bcrypt.hashSync("ilovepizza", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johndoe@outlook.com",
    password: bcrypt.hashSync("ilovepizza", 10),
  },
  {
    name: "Jane Doe",
    email: "janedoe@outlook.com",
    password: bcrypt.hashSync("ilovepizza", 10),
  },
];

module.exports = users