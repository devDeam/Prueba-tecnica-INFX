import { Layout, Menu, Badge, Modal } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

/**
 * Este componente `Nav` representa la estructura principal de navegación de la aplicación.
 * Utiliza `Layout` de Ant Design para organizar un encabezado (Header), contenido (Content) y pie de página (Footer).
 * También incluye un menú de navegación, un ícono de carrito con `Badge`, y un `Modal` que muestra el contenido del carrito.
 *
 * Funcionalidades principales:
 * - Permite la navegación entre rutas como Inicio y Crear producto.
 * - Muestra dinámicamente cuál ítem del menú está activo según la ruta.
 * - Muestra un ícono de carrito con un contador (actualmente en cero).
 * - Al hacer clic en el carrito, se abre un modal que indica que el carrito está vacío.
 *
 */

const { Header, Footer, Content } = Layout;

const Nav = () => {
  const location = useLocation(); // Para obtener la ruta actual
  const [isModalOpen, setIsModalOpen] = useState(false);

  const routeKeyMap: { [key: string]: string } = {
    // Se mapean las rutas para el header
    "/": "1",
    "/create": "3",
  };
  const selectedKey = routeKeyMap[location.pathname] || "1"; // Para activar el item segun la ruta en la que se está

  const menuItems = [
    {
      key: "1",
      label: <Link to="/">Inicio</Link>,
    },
    {
      key: "3",
      label: <Link to="/create">Crear producto</Link>,
    },
  ];

  const cartItemCount = 0; // valor que se mostrará en el badge del carrito

  const handleCartClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <Header className="fixed-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={menuItems}
          style={{ flex: 1 }}
        />

        <div className="cart-container" onClick={handleCartClick} style={{ cursor: "pointer" }}>
          <Badge count={cartItemCount} showZero>
            <ShoppingCartOutlined style={{ fontSize: "24px", color: "white" }} />
          </Badge>
        </div>
      </Header>

      <Content className="page-content">
        <Outlet />
      </Content>

      <Footer className="fixed-footer">
        Derechos reservados ©{new Date().getFullYear()} Created by Daniel Almanza
      </Footer>

      <Modal
        title="Carrito de compras"
        open={isModalOpen}
        onCancel={handleClose}
        footer={null}
      >
        <p>Tu carrito está vacío.</p>
      </Modal>
    </Layout>
  );
};

export default Nav;
