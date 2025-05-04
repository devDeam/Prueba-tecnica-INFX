import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

/**
 * Componente `CreateButton`
 *
 * Este componente renderiza un botón que, al hacer clic, redirige al usuario a la ruta `/create`.
 * La intención es llevar al usuario a la vista de creación de un nuevo producto o ítem,
 * donde podrá llenar un formulario y enviarlo para almacenarlo en la base de datos.
 *
 */

const CreateButton = () => {

    const navigate = useNavigate();
    const handleCreate = () => {
        navigate('/create');
    };

    return (
        <Button
            onClick={handleCreate}
        >
            Crear nuevo producto
        </Button>
    );
};

export default CreateButton;