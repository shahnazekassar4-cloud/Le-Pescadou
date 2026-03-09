import "../App.css";
import { listeCoordonnees } from "../listes/listeCoordonees";
import type { typeCoordonnees } from "../listes/listeCoordonees";
import { ComposantCoordonnees } from "../composants/ComposantCoordonnees";
import { Head } from "../composants/Head";
import { ComposantCommander } from "../composants/ComposantCommander";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Head />
      <img src="../devanture.JPG" className="" />
      <div className="text-xs my-5">
        <p className="mx-10">
          Le Pescadou vous propose une sélection de produits terre et mer de
          qualité.
        </p>
        <p>Retrouvez-nous tous les jours à la Marsa.</p>
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
      <div className="m-5 ">
        {listeCoordonnees.map((coordonnees: typeCoordonnees) => {
          return <ComposantCoordonnees coordonnees={coordonnees} />;
        })}
      </div>
      <div className="mb-10 w-full gap-5 flex justify-center">
        <a
          href="https://www.facebook.com/LePescadouMarsaPlage/?locale=fr_FR"
          target="_blank"
        >
          <img src="/facebook.png" className="w-6"></img>
        </a>
        <a href="https://www.instagram.com/kassar_karim/?hl=fr" target="_blank">
          <img src="/instagram.png" className="w-6"></img>
        </a>
        <a href="https://maps.app.goo.gl/BwWJtsdZLpZ419Lk8" target="_blank">
          <img src="/star.png" className="w-6"></img>
        </a>
      </div>
      <p className="text-[10px]">
        Site développé par{" "}
        <a href="https://shahnaze-kassar.web.app/">
          <u>Shahnaze Kassar </u>
        </a>
      </p>
    </div>
  );
}
