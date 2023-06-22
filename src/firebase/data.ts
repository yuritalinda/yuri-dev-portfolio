import { firestore } from "../firebase/config";
import {
  collection,
  getDocs,
  DocumentSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";

export const getData = async (coleccion: string) => {
  try {
    const collectionRef = collection(firestore, coleccion);
    const snapshot = await getDocs(collectionRef);
    const data: any[] = [];
    snapshot.forEach((doc: DocumentSnapshot) => {
      const docData = doc.data();
      const docWithId = { id: doc.id, ...docData };
      data.push(docWithId);
    });
    return data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return "Error";
  }
};

export const getDetail = async (id: string) => {
  try {
    const docRef = doc(firestore, "proyectos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const docData = docSnap.data();
      const docWithId = { id: docSnap.id, ...docData };
      return docWithId;
    } else {
      console.log("No se encontró el documento");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return null;
  }
};
