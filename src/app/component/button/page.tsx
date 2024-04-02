import "@/app/component/button/button.css";
export interface ButtonProps {
  label: string;
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
