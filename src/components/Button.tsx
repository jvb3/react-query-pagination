type ButtonPropType = {
  onClickFunction: () => void;
  label: string;
};

const Button = ({ onClickFunction, label }: ButtonPropType) => {
  return (
    <button
      className={`text-center px-4 py-2 ${
        label === "Player One" ? "bg-gray-600" : "bg-pink-600"
      } text-white rounded-[2px]`}
      onClick={onClickFunction}
    >
      {label}
    </button>
  );
};

export default Button;
