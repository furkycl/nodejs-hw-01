const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');

const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) return console.log('Silinecek kişi yok.');
  contacts.pop();
  await writeContacts(contacts);
  console.log('Son kişi silindi.');
};

removeLastContact();
