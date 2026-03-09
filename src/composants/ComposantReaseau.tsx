import type { typeReaseau } from "../listes/listeReseau";

type ComposantLienProps = { reseau: typeReaseau };

export function ComposantReseau(props: ComposantLienProps) {
  const { reseau } = props;
  return (
    <a href={reseau.lien} target="_blank">
      <img src={reseau.icone} className="w-6"></img>
    </a>
  );
}
