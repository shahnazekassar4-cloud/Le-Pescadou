import { Clock, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

export type typeCoordonnees = {
  icone: ReactNode;
  info: string;
};

export const listeCoordonnees: typeCoordonnees[] = [
  {
    icone: <Phone size={13} color="#7E0000" />,
    info: "23 52 52 05",
  },
  {
    icone: <MapPin size={13} color="#7E0000" />,
    info: "Sidi Daoud, 32 rue Elarabi",
  },
  {
    icone: <Clock size={13} color="#7E0000" />,
    info: "Du lundi au dimanche de 8h à 17h",
  },
];
