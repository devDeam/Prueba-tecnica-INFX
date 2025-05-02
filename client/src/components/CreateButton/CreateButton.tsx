import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const CreateButton = () => {

    const navigate = useNavigate();
    const handleCreate = () => {
        navigate('/create'); // Navega a la página de creación
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