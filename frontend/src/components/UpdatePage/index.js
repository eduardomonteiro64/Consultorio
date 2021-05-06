import React from "react";
import {
  Layout,
  Descriptions,
  Row,
  Col,
  Typography,
  Input,
  Button,
  Drawer,
  Select,
  DatePicker,
  Form,
} from "antd";

const UpdatePage = (props) => {
  const { Content } = Layout;
  const { Title } = Typography;
  const { Search } = Input;
  const { Option } = Select;

  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = (value) => {
    setVisible(false);
  };

  const onSearch = (value) => console.log(value);

  const onChangeDatePicker = (value) => {
    if (value && value._d) {
      console.warn(value._d);
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setVisible(true);
  };

  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 720, margin: 10 }}
      >
        <Row>
          <Col sm={24} xs={24} align="middle">
            <Title>Atualizar Usuário</Title>
            <Col sm={22} xs={24} align="middle">
              <Search
                placeholder="Digite o nome ou documento do usuário"
                allowClear
                enterButton="Buscar"
                size={window.screen.width < 576 ? "small" : "large"}
                onSearch={onSearch}
                style={{ margin: 20 }}
              />
              <Descriptions layout="vertical">
                <Descriptions.Item label="Nome Completo">
                  João José da Silva
                </Descriptions.Item>
                <Descriptions.Item label="Genero">Masculino</Descriptions.Item>
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
                <Descriptions.Item label="RG">12.123.456-X</Descriptions.Item>
              </Descriptions>
              <Button type="primary" onClick={showDrawer}>
                Editar
              </Button>
              <Drawer
                title="Atualize os Dados"
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                  <div
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <Button onClick={onClose} style={{ marginRight: 8 }}>
                      Cancelar
                    </Button>
                  </div>
                }
              >
                <Form
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Row gutter={24}>
                    <Col span={24}>
                      <Form.Item
                        name="name"
                        label="Nome Completo"
                        rules={[
                          {
                            required: true,
                            message: "Por favor insira um nome.",
                          },
                        ]}
                      >
                        <Input placeholder="Insira o nome completo." />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="stateDocument"
                        label="RG"
                        rules={[
                          {
                            required: true,
                            message: "Por favor insira um RG.",
                          },
                        ]}
                      >
                        <Input placeholder="Insira o número do RG." />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="federalDocument"
                        label="CPF"
                        rules={[
                          {
                            required: true,
                            message: "Por favor insira um CPF.",
                          },
                        ]}
                      >
                        <Input placeholder="Insira o número do CPF." />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="owner"
                        label="Genero"
                        rules={[
                          { required: true, message: "Selecione o genero." },
                        ]}
                      >
                        <Select placeholder="Por favor selecione um genero.">
                          <Option value="male">Masculino</Option>
                          <Option value="female">Feminino</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="telephone"
                        label="Telefone/Celular"
                        rules={[
                          {
                            required: true,
                            message: "Por favor insira um número.",
                          },
                        ]}
                      >
                        <Input placeholder="Insira um número válido." />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="birthDate"
                        label="Data de Nascimento"
                        rules={[
                          {
                            required: true,
                            message: "Por favor insira uma data de nascimento",
                          },
                        ]}
                      >
                        <DatePicker onChange={onChangeDatePicker} />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="streetName"
                        label="Rua e Número"
                        rules={[
                          {
                            required: true,
                            message: "Por favor insira uma rua válida.",
                          },
                        ]}
                      >
                        <Input placeholder="Insira uma rua com número da casa." />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="cityName"
                        label="Cidade"
                        rules={[
                          {
                            required: true,
                            message: "Por favor insira uma cidade válida.",
                          },
                        ]}
                      >
                        <Input placeholder="Insira uma cidade." />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="stateName"
                        label="Estado"
                        rules={[
                          {
                            required: true,
                            message: "Por favor insira um estado válido.",
                          },
                        ]}
                      >
                        <Input placeholder="Insira o nome do estado." />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Enviar
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Drawer>
            </Col>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default UpdatePage;
