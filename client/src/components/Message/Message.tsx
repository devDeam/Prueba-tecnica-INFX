import { useEffect, useRef } from 'react';
import { message } from 'antd';

/**
 * Este componente `Message` muestra un mensaje utilizando el componente `message` de Ant Design.
 * Dependiendo del estado (`state`), muestra un mensaje de éxito o error después de un mensaje de carga.
 * El mensaje se muestra solo una vez gracias a un `useRef` que controla si el mensaje ya ha sido mostrado.
 *
 * @param {MessageProps} props - Las propiedades del componente.
 * @param {string} props.content - El contenido del mensaje que se mostrará (mensaje de éxito o error).
 * @param {boolean} props.state - Determina el tipo de mensaje a mostrar. Si es `true`, se muestra un mensaje de éxito, de lo contrario, se muestra un mensaje de error.
 *
 */

interface MessageProps {
  content: string;
  state: boolean;
}

const Message = ({ content, state }: MessageProps) => {
  const [messageApi, contextHolder] = message.useMessage(); // `useMessage` proporciona una API de ant para mostrar mensajes en la interfaz.
  const hasShown = useRef(false);   // `useRef` se usa para asegurarse de que el mensaje solo se muestre una vez.

  useEffect(() => {
    if (hasShown.current) return; // Si ya se mostró el mensaje no hace nada
    hasShown.current = true; // Se indica que ya se mostró el mensaje

    messageApi
      .open({
        type: 'loading',
        content: 'Procesando...',
        duration: 1.0,
      })
      .then(() =>
        messageApi.open({
          type: state ? 'success' : 'error',
          content,
          duration: 2.0,
        })
      );
  }, [state, content, messageApi]);

  return <>{contextHolder}</>; // para que los mensajes se agreguen a la interfaz.
};

export default Message;
