import "../App.css";
import { Head } from "../composants/Head";
import { ComposantProduit } from "../composants/ComposantProduit";
import { ComposantCommander } from "../composants/ComposantCommander";
import { useState } from "react";
import { useEffect } from "react";
import fetchJSON from "../backend/fetchJSON";
import type { typeProduit } from "../composants/ComposantProduit";
export default function Menu() {
  // CATEGORIES
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
      setCategorie(reponse.data);
    };
    getCategories();
  }, []);
  // PARODUITS
  const [produit, setProduit] = useState<typeProduit[]>([]);

  useEffect(() => {
    const getProduits = async () => {
      const reponse = await fetchJSON({
        url: "produits?populate=categorie",
        method: "GET",
      });
      setProduit(reponse.data);
    };
    getProduits();
  }, []);

  // filtre
  const [selectedCategorieId, setSelectedCategorieId] = useState<number>(2);
  const selectedCategorie = categorie.find(
    (categorie) => categorie.id === selectedCategorieId,
  );
  return (
    <div className="w-full">
      <div className="sticky top-0 bg-white z-1">
        <Head />
        <div className="font-semibold md:justify-center w-full flex gap-3 overflow-auto py-3 shadow-md px-3 -mt-5">
          {categorie?.map((categorie: typeCategorie) => {
            return (
              <button
                onClick={() => {
                  setSelectedCategorieId(categorie.id);
                }}
                className={` border bg-red-50 rounded-md text-sm text-nowrap px-4 py-3
            hover:text-red-900 hover:border-red-900 hover:cursor-pointer
             ${
               categorie.id === selectedCategorieId
                 ? "text-red-900 border-red-900"
                 : "border-transparent bg-red-50"
             } `}
              >
                {categorie.nom}
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-auto md:mx-60">
        <div className="m-5 text-xs italic shadow-sm rounded-xl p-2">
          {selectedCategorie?.description}
        </div>
        <div className="mb-20">
          {produit
            ?.filter((produit: typeProduit) => {
              return produit.categorie?.id === selectedCategorieId;
            })
            .map((produit: typeProduit) => {
              return (
                <ComposantProduit
                  produit={{
                    id: produit.id,
                    nom: produit.nom,
                    description: produit.description,
                    prix: produit.prix,
                    image: produit.image,
                    categorie: {
                      id: produit.categorie.id,
                      nom: produit.categorie.nom,
                    },
                  }}
                />
              );
            })}
        </div>
      </div>

      <div className="fixed bottom-8 right-0 left-0">
        <ComposantCommander />
      </div>
    </div>
  );
}
