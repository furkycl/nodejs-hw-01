const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');
const createFakeContact = require('../utils/createFakeContact');

const addOneContact = async () => {
  const contacts = await readContacts();
  contacts.push(createFakeContact());
  await writeContacts(contacts);
};

addOneContact();
