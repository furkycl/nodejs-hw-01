const readContacts = require('../utils/readContacts');

const getAllContacts = async () => {
  const contacts = await readContacts();
  console.log(contacts);
};

getAllContacts();
