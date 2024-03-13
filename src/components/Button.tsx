type ButtonProps = {
  onClickFunction: () => void;
  label: string;
  disabled: boolean
};

const Button = ({ onClickFunction, label, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`text-center px-4 py-2 ${
        label === "Player One" ? "bg-gray-600" : "bg-pink-600"
      } text-white rounded-[2px] `}
      onClick={onClickFunction}

    >
      {label}
    </button>
  );
};

export default Button;
