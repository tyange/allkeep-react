import inputTextIcon from "../../assets/input-field-svgrepo-com.svg";

export default function SideKick(): React.ReactNode {
  return (
    <div className="join join-vertical absolute -right-24 top-1">
      <button className="btn join-item w-20">
        <img
          className="w-full"
          src={inputTextIcon}
          alt="text 타입의 input 요소를 추가하는 버튼"
        />
      </button>
    </div>
  );
}
