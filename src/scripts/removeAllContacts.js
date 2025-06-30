const writeContacts = require('../utils/writeContacts');

const removeAllContacts = async () => {
  await writeContacts([]);
  console.log('Tüm kişiler silindi.');
};

removeAllContacts();
