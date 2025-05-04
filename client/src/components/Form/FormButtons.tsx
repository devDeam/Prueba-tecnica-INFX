import { Button, Form, Space } from 'antd';
import BackButton from '../BackButton/BackButton.tsx';
import { FormButtonsProps } from '../../types/buttons.d.tsx';

/**
 * Componente `FormButtons`
 *
 * Se tienen 2 botones para el formulario de creación de productos. Backbutton viene un componente ya creado y sirve
 * para regresar a la vista anterior. El el botón `Crear` que ejecuta una función que se le pasa mediante props.
 *
 * @param {FormButtonsProps} props - Propiedades del componente.
 * @param {() => void} props.onClick - Función que se ejecuta cuando se hace clic en el botón "Crear".
 *
 */

const FormButtons = ({ onClick }: FormButtonsProps) => (
  // Recibe una funcion enviada como props en este caso llamada onclick, que se encuentra en la logica del CreateItem
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
