import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  // TODO: Add logic to a method that accepts some content and adds it to the database

  // Added logic to Put function 
  export const putDb = async (content) => {
    console.log ('PUT request to update the Jate database');
    // connection to Database
    const contactDb =await openDB('jate', 1);
    // New transaction with database and priveleges specified
    const transaction = contactDb.transaction('jate', 'readwrite');
    // Open the desired object store 
    const objStore = transaction.objectStore('jate');
    // Passed in the content 
    const request = objstore.put({ id: 1, value: content });
    // Confirmation of request going through
    const result = await request;
    console.log('data saved to the database', result);

  };

// TODO: Add logic for a method that gets all the content from the database
 
// Added logic to Get function 
export const getDb = async () => {
  console.log('Getting Data from Jate database');
 
  const contactDb = await openDB('jate', 1); 

  const transaction = jateDb.transaction('jate', 'readwrite');

  const objStore = transaction.objectStore('jate');

  const request = objStore.getAll();

  const result = await request;
  console.log('result.value', results); 
  return result?.value;
}

initdb();
