import { Button, Form, Space } from 'antd';
import BackButton from '../BackButton/BackButton.tsx';
import { FormButtonsProps } from '../../types/buttons.d.tsx';

const FormButtons = ({ onClick }: FormButtonsProps) => (
  <Form.Item>
    <Space>
      <BackButton 
        label="volver"
        style={{ width: '120px' }} 
      />
      <Button
        type="primary"
        style={{ width: '120px' }}
        onClick={onClick}>
          Crear
        </Button>
    </Space>
  </Form.Item>
);

export default FormButtons;
