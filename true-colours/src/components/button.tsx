type ButtonProps = {
  text: string;
  onClick: (event: React.FormEvent) => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="main-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
