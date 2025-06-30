const fs = require('fs/promises');
const { PATH_DB } = require('../constants/contacts');

const readContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(data);
};

module.exports = readContacts;
