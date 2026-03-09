import Popup from "./Popup";
import { useState } from "react";
import { ChildrenCommander } from "./ChildrenCommander";

export function ComposantCommander() {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const openPopup = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div>
      <button
        onClick={openPopup}
        className="border border-red-900 bg-red-900 py-2 px-5 rounded-4xl text-white 
      hover:bg-white hover:text-red-900 hover:cursor-pointer"
      >
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
