import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export async function getItems(userId) {
  const itemsCollection = collection(db, 'users', userId, 'items');
  const items = [];

  try {
    const querySnapshot = await getDocs(itemsCollection);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error('Error getting items:', error);
    throw error;
  }
}

export async function addItem(userId, item) {
  const userRef = collection(db, 'users', userId, 'items');

  try {
    const newItemRef = await addDoc(userRef, item);

    return newItemRef.id;
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
}
