export type typeProduit = {
  id: number;
  nom: string;
  description: string;
  prix: string;
  image: "";
  categorie: {
    id: number;
    nom: string;
  };
};

type ComposantProduitProps = { produit: typeProduit };

export function ComposantProduit(props: ComposantProduitProps) {
  const { produit } = props;
  return (
    <div className="flex flex-row items-start m-5 gap-3">
      <img src={produit.image} className="w-10 opacity-50" />
      <div className="flex flex-col w-full text-start">
        <div className="text-md font-semibold">{produit.nom}</div>
        <div className="text-sm italic">{produit.description}</div>
      </div>
      <div className="text-xs text-nowrap fit mt-1.5">{produit.prix}</div>
    </div>
  );
}
