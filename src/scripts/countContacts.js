const readContacts = require('../utils/readContacts');

const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`Toplam kişi sayısı: ${contacts.length}`);
};

countContacts();
