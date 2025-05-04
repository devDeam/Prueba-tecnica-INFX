import { Result } from "antd";
import BackButton from "../components/BackButton/BackButton";

/**
 * Este componente `NotFoundPage` muestra una página de error 404 cuando no se encuentra la página solicitada.
 * El componente incluye un título, un mensaje personalizado y, opcionalmente, un botón para volver a la página anterior.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título que se muestra en la página (opcional). Por defecto es "404".
 * @param {string} props.msg - Mensaje que se muestra al usuario indicando que la página no fue encontrada.
 * @param {boolean} props.btn - Define si se debe mostrar el botón de "Volver" (true) o no (false).
 */

interface NotFoundProps {
    title?: string,
    msg: string,
    btn: boolean
}

const NotFoundPage = ({title, msg, btn}: NotFoundProps) => {
  return (
    <Result
      status="404"
      title={title ? title: '404'}
      subTitle={msg}
      extra={btn ? <BackButton label="Volver"/> : ''}
    />
  );
};

export default NotFoundPage;
