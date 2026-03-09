import "../App.css";
import { listeCoordonnees } from "../listes/listeCoordonees";
import type { typeCoordonnees } from "../listes/listeCoordonees";
import { ComposantCoordonnees } from "../composants/ComposantCoordonnees";
import { Head } from "../composants/Head";
import { ComposantCommander } from "../composants/ComposantCommander";
import { ComposantReseau } from "../composants/ComposantReaseau";
import { listeReseau, type typeReaseau } from "../listes/listeReseau";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Head />
      <div className="md:flex md:gap-10">
        <img src="../devanture.JPG" className="md:w-160" />
        <div className="flex flex-col items-center md:w-80">
          <div className="text-[14] my-5 md:mt-0 md:mb-5 italic mx-10">
            Le Pescadou vous propose une sélection de produits terre et mer de
            qualité.
          </div>
          <a
            href="/menu"
            className="border border-red-900 bg-red-900 py-2 px-5 rounded-4xl text-white 
        hover:bg-transparent hover:text-red-900 hover:cursor-pointer
        m-2.5"
          >
            VOIR LE MENU
          </a>
          <div className="my-2.5">
            {" "}
            <ComposantCommander />
          </div>
          <div className="m-5">
            {listeCoordonnees.map((coordonnees: typeCoordonnees) => {
              return <ComposantCoordonnees coordonnees={coordonnees} />;
            })}
          </div>

          <div className="gap-5 flex">
            {listeReseau.map((reseau: typeReaseau) => {
              return (
                <ComposantReseau
                  reseau={{
                    icone: reseau.icone,
                    lien: reseau.lien,
                  }}
                />
              );
            })}
          </div>
        </div>{" "}
        <p className="text-[10px] mt-10 fixed bottom-4 right-0 left-0">
          Site développé par{" "}
          <a href="https://shahnaze-kassar.web.app/">
            <u>Shahnaze Kassar </u>
          </a>
        </p>
      </div>
    </div>
  );
}
