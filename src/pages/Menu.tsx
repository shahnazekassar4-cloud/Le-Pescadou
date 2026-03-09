import "../App.css";
import { listeCategories } from "../listes/listeCategories";
import { Head } from "../composants/Head";
import { listeProduits } from "../listes/listeProduits";
import type { typeProduit } from "../listes/listeProduits";
import { ComposantProduit } from "../composants/ComposantProduit";
import { useState } from "react";
import { ComposantCommander } from "../composants/ComposantCommander";

export default function Menu() {
  const [selectedCategorieId, setSelectedCategorieId] = useState<number>(1);
  const selectedCategorie = listeCategories.find(
    (categorie) => categorie.id === selectedCategorieId,
  );
  return (
    <div>
      <div className="sticky top-0 bg-white z-1">
        <Head />
        <div className="flex gap-3 overflow-auto w-screen py-3 shadow-md px-3 -mt-5">
          {listeCategories.map((categorie) => {
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
                {categorie.nomCategorie}
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-auto">
        <div className="m-5 text-xs italic shadow-sm rounded-xl p-2">
          {selectedCategorie!.descriptionCategorie}
        </div>
        {listeProduits
          .filter((produit: typeProduit) => {
            return produit.idCategorie === selectedCategorieId;
          })
          .map((produit: typeProduit) => {
            return <ComposantProduit produit={produit} />;
          })}
        <div className="h-20"></div>
      </div>
      <div className="fixed bottom-8 right-0 left-0">
        <ComposantCommander />
      </div>
    </div>
  );
}
