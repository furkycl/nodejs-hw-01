import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`Toplam kişi sayısı: ${contacts.length}`);
};

countContacts();
