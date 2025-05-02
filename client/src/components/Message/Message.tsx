import { message } from "antd";
import { useEffect, useRef } from "react";

interface MessageProps {
  content: string;
  state: boolean;
}

const Message = ({ content, state }: MessageProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const hasShown = useRef(false);

  useEffect(() => {
    if (hasShown.current) return; // Evita mostrarlo de nuevo

    hasShown.current = true;

    messageApi.open({
      type: state ? "success" : "error",
      content,
    });
  }, [state, content, messageApi]);

  return <>{contextHolder}</>;
};

export default Message;
