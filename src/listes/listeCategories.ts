export type typeCategorie = {
  id: number;
  nomCategorie: string;
  descriptionCategorie: string;
};

export const listeCategories: typeCategorie[] = [
  {
    id: 1,
    nomCategorie: "Sauces Maison",
    descriptionCategorie: "Sauces artisanales en bocaux",
  },
  {
    id: 2,
    nomCategorie: "Produits de la Mer",
    descriptionCategorie: "Produits frais et préparations de la mer",
  },
  {
    id: 3,
    nomCategorie: "Plateaux",
    descriptionCategorie: "Plateaux charcuterie, fromage et fruits de mer",
  },
  {
    id: 4,
    nomCategorie: "Plats Cuisinés",
    descriptionCategorie: "Plats cuisinés en bocaux ou traiteur",
  },
  {
    id: 5,
    nomCategorie: "Soupes",
    descriptionCategorie: "Soupes artisanales longue conservation",
  },
  {
    id: 6,
    nomCategorie: "Rillettes",
    descriptionCategorie: "Rillettes en bocaux",
  },
  {
    id: 7,
    nomCategorie: "Tartinothèque",
    descriptionCategorie: "Tartinables et crèmes apéritives",
  },
  {
    id: 8,
    nomCategorie: "Kif-Apéro",
    descriptionCategorie: "Produits pour l'apéritif",
  },
  {
    id: 9,
    nomCategorie: "Produits Terre - Volaille",
    descriptionCategorie: "Produits de volaille",
  },
  {
    id: 10,
    nomCategorie: "Produits Terre - Porc",
    descriptionCategorie: "Produits de porc et charcuterie",
  },
];
