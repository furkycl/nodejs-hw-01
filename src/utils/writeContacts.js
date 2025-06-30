const fs = require('fs/promises');
const { PATH_DB } = require('../constants/contacts');

const writeContacts = async (contacts) => {
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

module.exports = writeContacts;
