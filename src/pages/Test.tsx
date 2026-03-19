import "../App.css";
import fetchJSON from "../backend/fetchJSON";
import { useState } from "react";
import { useEffect } from "react";

export default function Test() {
  type typeCategorie = { id: number; nom: string; description: string };

  const [categorie, setCategorie] = useState<typeCategorie[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      // nécessaire avant un await
      const reponse = await fetchJSON({
        // tout ce qui est après attend
        url: "categories", //ca va tapper dans http:localhost:1337/api/produits | tu peux aller voir dans fetchJSON si tu veux voir comment ca marche
        method: "GET",
      });
      console.log("réponse du serveur:", reponse);
      setCategorie(reponse.data);
    };
    getCategories();
  }, []);

  return (
    <div className="w-full">
      <button
        className="border border-red-900 bg-red-900 py-2 px-5 rounded-4xl text-white hover:bg-transparent hover:text-red-900 hover:cursor-pointer"
        // onClick={getCategories}
      >
        mettre à jour liste catégories
      </button>

      {categorie?.map((cat: typeCategorie) => {
        return <div>{cat.nom}</div>;
      })}
    </div>
  );
}
