import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { BackButtonProps } from "../../types/buttons.d.tsx";

/**
 * Componente `BackButton` que permite la navegación en la aplicación dependiendo de la etiqueta proporcionada.
 *
 * Este componente renderiza un botón que, al hacer clic, redirige al usuario a una ruta específica:
 * - Si el `label` es "inicio", redirige a la página de inicio ("/").
 * - Si el `label` es "volver", regresa a la página anterior.
 *
 * @param {BackButtonProps} props - Las propiedades que puede recibir el botón a renderizar.
 * @param {string} props.label - La etiqueta que determinará a qué ruta navegar.
 * @param {React.CSSProperties} props.style - Estilos opcionales para personalizar el botón.
 * @param {Object} props.buttonProps - Propiedades adicionales que pueden ser pasadas al componente `Button` de Ant Design.
 *
 */

const BackButton = ({ label, style, ...buttonProps }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    // esta funcion configura la ruta a la que el boton va a navegar segun el label enviado
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
