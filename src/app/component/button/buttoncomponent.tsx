import "@/app/component/button/button.css";
interface buttonProps {
  label: string;
  onClick: any;
}

const Button: React.FC<buttonProps> = ({ label, onClick }) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
