import React from "react";
import { Layout, Row, Col, Typography, Input, Space, Card, Button } from "antd";

const DeletePage = () => {
  const { Content } = Layout;
  const { Title } = Typography;
  const { Search } = Input;

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
                <Button type="primary" danger>
                  Deletar
                </Button>
              </Card>
            </Space>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default DeletePage;
