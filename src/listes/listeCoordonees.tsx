import { Clock, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

export type typeCoordonnees = {
  icone: ReactNode;
  info: ReactNode;
};

export const listeCoordonnees: typeCoordonnees[] = [
  {
    icone: <Phone size={13} color="#7E0000" />,
    info: (
      <a href="tel:+21623525205" target="_blank">
        <u>23 52 52 05</u>
      </a>
    ),
  },
  {
    icone: <MapPin size={13} color="#7E0000" />,
    info: (
      <a href="https://maps.app.goo.gl/BwWJtsdZLpZ419Lk8" target="_blank">
        <u>Sidi Daoud, 32 rue Elarabi</u>
      </a>
    ),
  },
  {
    icone: <Clock size={13} color="#7E0000" />,
    info: "Du lundi au dimanche de 8h à 20h",
  },
];
