import React from "react";
import { Layout, Row, Col, Typography, Input, List, Card, Button } from "antd";

const HealthPlansPage = () => {
  const { Content } = Layout;
  const { Title } = Typography;
  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  const data = [
    {
      title: "Plano X01",
    },
    {
      title: "Plano X02",
    },
    {
      title: "Plano X03",
    },
    {
      title: "Plano X04",
    },
    {
      title: "Plano X05",
    },
    {
      title: "Plano X06",
    },
  ];
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 720, margin: 10 }}
      >
        <Row>
          <Col sm={24} xs={24} align="middle">
            <Title>Planos de Saúde Aceitos</Title>
            <Col sm={22} xs={24} align="middle">
              <Search
                placeholder="Digite o nome do plano de saúde"
                allowClear
                enterButton="Buscar"
                size={window.screen.width < 576 ? "small" : "large"}
                onSearch={onSearch}
                style={{ margin: 20 }}
              />
              {data && data.length > 1 ? (
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                  }}
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <Card title={item.title}>Descrição do Plano</Card>
                      <Button style={{ margin: 10 }}>Editar Plano </Button>
                      <Button type="primary" danger style={{ margin: 10 }}>
                        Deletar Plano{" "}
                      </Button>
                    </List.Item>
                  )}
                />
              ) : (
                ""
              )}

              <Col align="end" style={{ marginTop: 50 }}>
                <Button type="primary">Adicionar Plano</Button>
              </Col>
            </Col>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default HealthPlansPage;
