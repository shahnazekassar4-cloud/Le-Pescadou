import type { typeProduit } from "../listes/listeProduits";
type ComposantProduitProps = { produit: typeProduit };

export function ComposantProduit(props: ComposantProduitProps) {
  const { produit } = props;
  return (
    <div className="flex flex-row items-start m-5 gap-3">
      <img src={produit.imageProduit} className="w-10 opacity-50" />
      <div className="flex flex-col w-full text-start">
        <div className="text-md font-semibold">{produit.nomProduit}</div>
        <div className="text-sm italic">{produit.descriptionProduit}</div>
      </div>
      <div className="text-xs text-nowrap fit mt-1.5">
        {produit.prixProduit}
      </div>
    </div>
  );
}
