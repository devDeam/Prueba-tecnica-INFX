import { Rate, Modal } from "antd";
import { useState } from "react";
import Message from "../Message/Message";
import { useNavigate } from 'react-router-dom';

interface RatingProps {
  rating?: number;
  readonly: boolean;
  itemId?: string;
}

const Rating = ({ rating, readonly, itemId }: RatingProps) => {
  const [newRate, setNewRate] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMsgShow, setIsMsgShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleRating = (value: number) => {
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
      setIsMsgShow(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(false);
      }
    } finally {
      setIsModalVisible(false);
      setLoading(false);
      setTimeout(() => {
        navigate(0);
      }, 3000);
    }
  };

  const handleCancel = () => {
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
        width="90%"  // Ajustar el tamaño a un 90% del ancho disponible
        style={{ maxWidth: "500px", margin: "0 auto" }}  // Ajustamos el maxWidth para pantallas más grandes
        bodyStyle={{ padding: "20px" }}  // Añadimos padding para mayor comodidad en dispositivos pequeños
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
