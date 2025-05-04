import { ButtonProps } from "antd";

/**
 * Interfaz `BackButtonsProps` Extiende las propiedades estándar de un botón de Ant Design (`ButtonProps`)
 * e incluye una propiedad adicional `label`, que representa el texto a mostrar en el botón de retroceso.
 *
 *  @property {string} label - Texto que se mostrará en el botón.
 */
export interface BackButtonProps extends ButtonProps {
  label: string;
}

/**
 * Interfaz `FormButtonsProps`define las propiedades requeridas para un componente de botones de formulario.
 *
 * @property {() => void} onClick - Función que se ejecuta al hacer clic en el botón.
 * @property {React.CSSProperties} [style] - Estilos opcionales para personalizar el botón.
 */

export interface FormButtonsProps {
    onClick: () => void;
    style?: React.CSSProperties;
  }