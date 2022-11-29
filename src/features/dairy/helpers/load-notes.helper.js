import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "api";

export async function loadNotes(uid = "") {
  if (!uid) throw new Error('User uid don"t exist');

  const collectionRef = collection(FirebaseDB, `${uid}/dairy/notes`);
  const docs = await getDocs(collectionRef);

  const notes = [];
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });

  return notes;
}
