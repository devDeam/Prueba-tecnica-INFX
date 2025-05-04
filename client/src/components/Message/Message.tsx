import { useEffect, useRef } from 'react';
import { message } from 'antd';

interface MessageProps {
  content: string;
  state: boolean;
}

const Message = ({ content, state }: MessageProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const hasShown = useRef(false);

  useEffect(() => {
    if (hasShown.current) return;

    hasShown.current = true;

    messageApi
      .open({
        type: 'loading',
        content: 'Procesando...',
        duration: 1.5,
      })
      .then(() =>
        messageApi.open({
          type: state ? 'success' : 'error',
          content,
          duration: 2.5,
        })
      );
  }, [state, content, messageApi]);

  return <>{contextHolder}</>;
};

export default Message;
