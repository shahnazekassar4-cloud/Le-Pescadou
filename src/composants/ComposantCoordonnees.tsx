import type { typeCoordonnees } from "../listes/listeCoordonees";
type ComposantCoordonneesProps = { coordonnees: typeCoordonnees };

export function ComposantCoordonnees(props: ComposantCoordonneesProps) {
  const { coordonnees } = props;
  return (
    <div className="flex flex-row items-center gap-3">
      <div> {coordonnees.icone}</div>
      <div className="text-xs"> {coordonnees.info}</div>
    </div>
  );
}
