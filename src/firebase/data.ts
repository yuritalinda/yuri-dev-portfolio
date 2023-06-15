import { firestore } from "../firebase/config";
import { collection, getDocs, DocumentSnapshot } from "firebase/firestore";

export const getData = async (coleccion: string) => {
  try {
    const collectionRef = collection(firestore, coleccion);
    const snapshot = await getDocs(collectionRef);
    const data: any[] = [];
    snapshot.forEach((doc: DocumentSnapshot) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return "Error";
  }
};
