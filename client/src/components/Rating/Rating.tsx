import { Rate, Modal } from "antd";
import { useState } from "react";
import Message from "../Message/Message";
import { useNavigate } from 'react-router-dom';

/**
 * Este componente `Rating` permite a los usuarios visualizar o registrar una calificación para un producto.
 *
 * - Si `readonly` es `true`, se muestra la calificación en modo solo lectura.
 * - Si `readonly` es `false`, permite seleccionar una calificación e iniciar una confirmación mediante un modal.
 * - Envía la calificación al backend vía `POST` y muestra un mensaje de éxito o error.
 *
 * @param {RatingProps} props - Propiedades del componente
 * @param {number} [props.rating] - Valor actual de calificación del producto (opcional)
 * @param {boolean} props.readonly - Si es `true`, el componente solo mostrará la calificación; si es `false`, permitirá calificar
 * @param {string} [props.itemId] - ID del producto al que se le asignará la calificación (opcional)
 */
interface RatingProps {
  rating?: number;
  readonly: boolean;
  itemId?: string;
}

const Rating = ({ rating, readonly, itemId }: RatingProps) => {
  const [newRate, setNewRate] = useState(0); // Valor seleccionado por el usuario
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMsgShow, setIsMsgShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [msg, setMsg] = useState(""); // Se guarda el mensaje para mostrar al enviar la calificacion
  const navigate = useNavigate();

  const handleRating = (value: number) => {
    // Se asigna el valor de la calificación a la vez que se abre el modal de confirmación
    setNewRate(value);
    setIsModalVisible(true);
  };

  const handleConfirm = async () => {
    if (!itemId || newRate == null) return;

    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/items/${itemId}/rating`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ rating: newRate })
      });

      if (!response.ok) {
        setError(false);
        setMsg("No se pudo enviar la calificación.");
      } else {
        setError(true);
        setMsg("Calificación enviada con éxito.");
      }
      setIsMsgShow(true); // Se empieza a cargar el mensaje de exito o error
    } catch (err) {
      if (err instanceof Error) {
        setError(false);
      }
    } finally {
      setIsModalVisible(false); // Se cierra el modal de confirmación
      setLoading(false);
      setTimeout(() => {
        navigate(0); // Se recarga la página para ver el valor de la calificación actualizado en tiempo real
      }, 3000);
    }
  };

  const handleCancel = () => {
    // Se cierra el modal si no se va a enviar la calificación y el valor de las estrellas vuelve a 0
    setIsModalVisible(false);
    setNewRate(0);
  };

  return (
    <div key={newRate}>
      {readonly ? (
        <Rate disabled allowHalf defaultValue={rating} />
      ) : (
        <Rate allowHalf defaultValue={newRate} onChange={handleRating} />
      )}

      <Modal
        title="Confirmar calificación"
        open={isModalVisible}
        onOk={handleConfirm}
        onCancel={handleCancel}
        okText="Enviar"
        cancelText="Cancelar"
        confirmLoading={loading}
        width="90%"  // tamaño a un 90% del ancho disponible
        style={{ maxWidth: "500px", margin: "0 auto" }}  // maxWidth para pantallas más grandes
        bodyStyle={{ padding: "20px" }}  // padding para mayor comodidad en dispositivos pequeños
      >
        <p>¿Deseas calificar este producto con {newRate} estrellas?</p>
      </Modal>

      {isMsgShow && (
        <Message
          content={msg}
          state={error ? true : false}
        />
      )}
    </div>
  );
};

export default Rating;
