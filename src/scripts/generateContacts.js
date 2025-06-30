const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');
const createFakeContact = require('../utils/createFakeContact');

const generateContacts = async (number = 5) => {
  const contacts = await readContacts();
  const newContacts = Array.from({ length: number }, () => createFakeContact());
  const updated = [...contacts, ...newContacts];
  await writeContacts(updated);
};

generateContacts();
