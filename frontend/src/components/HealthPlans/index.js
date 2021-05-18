import React from "react";
import { Layout, Row, Col, Typography, Input, List, Card, Button } from "antd";

const HealthPlans = () => {
  const { Content } = Layout;
  const { Title } = Typography;
  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  const data = [
    {
      title: "Consulta dia 01/01",
    },
    {
      title: "Consulta dia 01/02",
    },
    {
      title: "Consulta dia 01/03",
    },
    {
      title: "Consulta dia 01/04",
    },
    {
      title: "Consulta dia 01/05",
    },
    {
      title: "Consulta dia 01/06",
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
            <Title>Planos de Saúde</Title>
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

export default HealthPlans;
