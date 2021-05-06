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
  Descriptions,
} from "antd";

const SearchPage = (props) => {
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
            <Title>Pesquisar Usuário</Title>
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
                <Button type="primary" onClick={showModal}>
                  Ver Ficha Completa
                </Button>
                <Modal
                  title="Informação do Usuário"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  cancelText="Voltar"
                >
                  <Descriptions layout="vertical">
                    <Descriptions.Item label="Nome Completo">
                      João José da Silva
                    </Descriptions.Item>
                    <Descriptions.Item label="Genero">
                      Masculino
                    </Descriptions.Item>
                    <Descriptions.Item label="Data de Nascimento">
                      01/01/1900
                    </Descriptions.Item>
                    <Descriptions.Item label="Telefone/Celular">
                      +55(13)91234-5678
                    </Descriptions.Item>
                    <Descriptions.Item label="Rua e Número" span={2}>
                      Rua Dos Bobos, Número 0
                    </Descriptions.Item>
                    <Descriptions.Item label="Bairro">
                      Vila do Sapo
                    </Descriptions.Item>
                    <Descriptions.Item label="Estado/Cidade">
                      São Paulo, Santos
                    </Descriptions.Item>
                    <Descriptions.Item label="CPF">
                      012.345.789-0X
                    </Descriptions.Item>
                    <Descriptions.Item label="RG">
                      12.123.456-X
                    </Descriptions.Item>
                  </Descriptions>
                </Modal>
              </Card>
            </Space>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default SearchPage;
