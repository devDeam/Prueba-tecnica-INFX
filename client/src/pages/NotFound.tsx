import { Result } from "antd";
import BackButton from "../components/BackButton/BackButton";

interface NotFoundProps {
    title?: string,
    msg: string,
    btn: boolean
}

const NotFoundPage = ({title, msg, btn}: NotFoundProps) => {
  return (
    <Result
      status="404"
      title={title}
      subTitle={msg}
      extra={btn ? <BackButton label="Volver"/> : ''}
    />
  );
};

export default NotFoundPage;
