import { Form, Input, InputNumber, Select, Rate } from 'antd';

const { TextArea } = Input;

const ItemFormFields = () => (
  <>
    <Form.Item name="brand" label="Marca">
      <Input placeholder="Marca del equipo" />
    </Form.Item>
    <Form.Item name="name" label="Nombre">
      <Input placeholder="Nombre del equipo" />
    </Form.Item>
    <Form.Item name="price" label="Precio">
      <Input placeholder="Precio en pesos COP" />
    </Form.Item>
    <Form.Item name="stock" label="Stock">
      <InputNumber placeholder="Cantidad" style={{ width: '100%' }} />
    </Form.Item>
    <Form.Item name="description" label="Descripción">
      <TextArea placeholder="Descripción del equipo" rows={5} />
    </Form.Item>
    <Form.Item name="category" label="Categoría">
      <Select>
        <Select.Option value="computadores">Computadores</Select.Option>
        <Select.Option value="celulares">Celulares</Select.Option>
        <Select.Option value="tablets">Tablets</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item name="imageUrl" label="Imagen URL">
      <Input placeholder="Ingresa la URL de la imagen del producto" />
    </Form.Item >
    <Form.Item name="rating" label="Puntuación">
      <Rate />
    </Form.Item>
  </>
);

export default ItemFormFields;
