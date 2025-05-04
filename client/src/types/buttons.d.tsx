import { ButtonProps } from "antd";
export interface BackButtonProps extends ButtonProps {
  label: string;
}

export interface FormButtonsProps {
    onClick: () => void;
    style?: React.CSSProperties;
  }