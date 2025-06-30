import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    console.log('Silinecek kişi yok.');
    return;
  }
  contacts.pop();
  await writeContacts(contacts);
  console.log('Son kişi silindi.');
};

removeLastContact();
