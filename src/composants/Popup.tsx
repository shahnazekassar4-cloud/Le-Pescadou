import type { ReactNode } from "react";
import XIcon from "./XIcon";

type PopupProps = {
  isVisible: boolean;
  onClose?: () => void;
  children?: ReactNode;
  title?: string;
  className?: string;
};

export default function Popup(props: PopupProps) {
  const { children, title, isVisible } = props;
  if (isVisible)
    return (
      <div
        className="flex justify-center items-center fixed top-0 left-0 bg-[#000000]/50 h-screen popup-layout"
        onClick={props.onClose}
      >
        <div
          className="p-8 m-10 text-justify relative bg-white border-transparent rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between ">
            {title && <b className="mb-3">{title}</b>}
            <button
              onClick={props.onClose}
              className="absolute top-5 right-5 bg-transparent border-transparent hover:cursor-pointer"
            >
              <XIcon />
            </button>
          </div>

          {children}
        </div>
      </div>
    );
}
