import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../plugins/firebase';

const collectionName = 'switches';

export async function createDocument(data: any): Promise<string> {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log(`Document written with ID: ${docRef.id}`);
    return docRef.id;
}

export async function readDocuments(): Promise<any[]> {
    const snapshot = await getDocs(collection(db, collectionName));
    const documents = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    // console.log('Documents: ', documents);
    return documents;
}

export async function readDocument(id: string): Promise<any | null> {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        console.log('No such document!');
        return null;
    }
}

export async function updateDocument(id: string, data: any): Promise<void> {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data);
    console.log(`Document ${id} updated with: `, data);
}

export async function deleteDocument(id: string): Promise<void> {
    await deleteDoc(doc(db, collectionName, id));
    console.log(`Document ${id} deleted`);
}