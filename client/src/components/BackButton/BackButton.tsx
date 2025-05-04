import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { BackButtonProps } from "../../types/buttons.d.tsx";

const BackButton = ({ label, style, ...buttonProps }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    const normalizeLabel = label.trim().toLowerCase();
    if (normalizeLabel === "inicio") {
      navigate("/"); // Vuelve al home
    } else if (normalizeLabel === "volver") {
      navigate(-1); // Vuelve a la pagina anterior
    }
  };

  return (
    <Button onClick={handleBack} style={style} {...buttonProps}>
      {label}
    </Button>
  );
};

export default BackButton;
