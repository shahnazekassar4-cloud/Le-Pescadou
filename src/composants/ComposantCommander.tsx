import Popup from "./Popup";
import { useState } from "react";
import { ChildrenCommander } from "./ChildrenCommander";

type ComposantCommanderProps = { style: string };

export function ComposantCommander(props: ComposantCommanderProps) {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const openPopup = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div>
      <button onClick={openPopup} className={props.style}>
        COMMANDER
      </button>
      <Popup
        isVisible={popupVisible}
        onClose={closePopup}
        children={<ChildrenCommander />}
        title="Commander"
      />
    </div>
  );
}
