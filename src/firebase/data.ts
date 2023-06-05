import { firestore } from "./config";
import { collection, getDocs } from "firebase/firestore";

// Leer datos de Firestore
export const getData = async () => {
  try {
    const collectionRef = collection(firestore, "proyectos");
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc) => {
      console.log("ID:", doc.id, "Datos:", doc.data());
    });
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};
