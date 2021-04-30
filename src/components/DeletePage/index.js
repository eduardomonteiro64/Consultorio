import React from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Input,
  Space,
  Card,
  Button,
  Modal,
} from "antd";

const DeletePage = () => {
  const { Content } = Layout;
  const { Title } = Typography;
  const { Search } = Input;

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSearch = (value) => console.log(value);
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 720, margin: 10 }}
      >
        <Row>
          <Col sm={24} xs={24} align="middle">
            <Title>Deletar Usuário</Title>
            <Col sm={22} xs={24} align="middle">
              <Search
                placeholder="Digite o nome ou documento do usuário"
                allowClear
                enterButton="Buscar"
                size={window.screen.width < 576 ? "small" : "large"}
                onSearch={onSearch}
                style={{ margin: 20 }}
              />
            </Col>
            <Space direction="vertical">
              <Card
                title="Informações"
                style={{ width: window.screen.width < 576 ? 200 : 300 }}
              >
                <p>Nome Paciente 1</p>
                <p>Documento Paciente 1</p>
                <Button type="primary" danger onClick={showModal}>
                  Deletar
                </Button>
                <Modal
                  title="Deletar Usuário"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  cancelText="Voltar"
                  okButtonProps={{ danger: true }}
                >
                  <p>Tem certeza que deseja deletar o usuário X?</p>
                </Modal>
              </Card>
            </Space>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default DeletePage;
