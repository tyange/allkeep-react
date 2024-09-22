import { useRef } from "react";
import inputIcon from "../../assets/text-input-svgrepo-com.svg";
import CommonInput from "../CommonInput";

type SideKickProps = {
  addElement: (elm: React.ReactNode) => void;
};

export default function SideKick({
  addElement,
}: SideKickProps): React.ReactNode {
  const commonInput = useRef(<CommonInput />);

  return (
    <div className="join join-vertical absolute -right-24 top-1">
      <button
        className="btn join-item w-20"
        onClick={() => addElement(commonInput.current)}
      >
        <img
          className="w-full"
          src={inputIcon}
          alt="text 타입의 input 요소를 추가하는 버튼"
        />
      </button>
    </div>
  );
}
