import { Form, message } from "antd";
import ProductFormFields from "../components/Form/ItemFormFields.tsx";
import FormButtons from "../components/Form/FormButtons.tsx";
import { ItemPayload } from "../types/item.d.tsx";
import Message from "../components/Message/Message.tsx";
import { useState } from "react";

const CreateItem = () => {
  // Estados para manejar el mensaje de éxito o error
  const [content, setContent] = useState("");
  const [state, setState] = useState(false);
  const [show, setShow] = useState(false);

  const createItem = async (item: ItemPayload) => {
    // Se hace la peticion tipo POST para crear el producto en la DB
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    if (!response.ok) {
      const error = await response.json();
      setContent("Error al crear el producto");
      setState(false);
      setShow(true);
      throw new Error(error.message || "Error al crear el producto");
    }
  };

  const [form] = Form.useForm();
  const handleCreate = async () => {
    try {
      const values = await form.validateFields();
      const payload: ItemPayload = {
        brand: values.brand,
        name: values.name,
        stock: values.stock,
        description: values.description,
        price: values.price,
        imageUrl: values.imageUrl,
        category: values.category,
      };
      await createItem(payload);
      message.success("Producto creado con éxito");
      setContent("Producto creado con éxito");
      setState(true);
      setShow(true);
      form.resetFields();
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message || "Ocurrió un error");
      } else {
        message.error("Error al crear el producto");
      }
      setContent("Error al crear el producto");
      setState(false);
      setShow(true);
    }
  };

  return (
    <div className="form-container" style={{ display: "flex", justifyContent: "center" }}>
      <div className="form-content" style={{ maxWidth: 600, width: "100%" }}>
        <h1 style={{ textAlign: "center" }}>Crear un nuevo producto</h1>
        <Form layout="vertical" form={form}>
          <ProductFormFields />
          <FormButtons onClick={handleCreate} />
        </Form>
      </div>
      {show && <Message content={content} state={state} />}
    </div>
  );
};

export default CreateItem;
