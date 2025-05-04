import { Form, message } from "antd";
import ProductFormFields from "../components/Form/ItemFormFields.tsx";
import FormButtons from "../components/Form/FormButtons.tsx";
import { ItemPayload } from "../types/item.d.tsx";
import Message from "../components/Message/Message.tsx";
import { useState } from "react";

/**
 * Este componente `CreateItem` renderiza el formulario para crear un nuevo producto.
 * Utiliza los componentes ya creados `ProductFormFields` y `FormButtons` para construir el formulario visualmente,
 * y se encarga de realizar la petición POST al backend para guardar el producto en la base de datos.
 *
 * Muestra mensajes de éxito o error al usuario dependiendo del resultado de la operación.
 */

const CreateItem = () => {
  // Estados para manejar el mensaje de éxito o error
  const [content, setContent] = useState("");
  const [state, setState] = useState(false);
  const [show, setShow] = useState(false);

    /**
     * Función que realiza la petición POST para crear el producto.
     * @param {ItemPayload} item - Los datos del producto a enviar al backend y se debe cumplir estrictamente la forma indicada
     *  en la interface.
     */
  const createItem = async (item: ItemPayload) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Para indicar que el contenido enviado es en formato json
        },
        body: JSON.stringify(item),           // Se convierte el objeto recibido por props a un string en formato json
      }
    );
    if (!response.ok) {
      // Manejo de error en la petición al API
      const error = await response.json();
      setContent("Error al crear el producto");
      setState(false);
      setShow(true);
      throw new Error(error.message || "Error al crear el producto");
    }
  };

  const [form] = Form.useForm(); // Instancia del formulario para metodos y obtener los valores
  const handleCreate = async () => {
    try {
      /**
       * validateFields() valida todos los campos del formulario si algún campo no es válido, lanza un error.
       * Si todos los campos son válidos, los valores de esos campos se obtienen como un objeto y se guarda en values.
       * Este objeto contiene los datos que tengan los campos en el formulario, obligatoriamente deben tener atributo "name"
       * que se toma como key en el objeto {"name": values.name}
       * - await para que no siga la ejecución hasta tener todos los valores listos.
       */
      const values = await form.validateFields();
      const payload: ItemPayload = {
        // objeto payload de tipo ItemPayload, que es la estructura que espera la función createItem. Se extraen los valores del paso anterior
        brand: values.brand,
        name: values.name,
        stock: values.stock,
        description: values.description,
        price: values.price,
        imageUrl: values.imageUrl,
        category: values.category,
      };
      await createItem(payload); // esperar que se ejecute completamente el creado
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
