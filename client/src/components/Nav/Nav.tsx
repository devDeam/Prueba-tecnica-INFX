import { Layout, Menu, Badge, Modal } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

const { Header, Footer, Content } = Layout;

const Nav = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const routeKeyMap: { [key: string]: string } = {
    "/": "1",
    "/create": "3",
  };
  const selectedKey = routeKeyMap[location.pathname] || "1";

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

  const cartItemCount = 0;

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
