import React from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
} from "antd";
import axios from "axios";

const CreatePage = (props) => {
  const { Content } = Layout;
  const { Title } = Typography;
  const { Option } = Select;
  const { Search } = Input;

  const [state, setState] = React.useState({
    name: "",
    federalDocument: "",
    stateDocument: "",
    gender: "",
    birthDate: "",
    telephone: "",
    postalNumber: "",
    streetName: "",
    districtName: "",
    cityName: "",
    stateName: "",
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        setState({ ...state, gender: "male" });
        return;

      case "female":
        setState({ ...state, gender: "female" });
        return;

      default:
        setState({ ...state, gender: "other" });
        return;
    }
  };

  const api = axios.create({
    baseURL: "https://viacep.com.br",
  });

  const onChangeDatePicker = (value) => {
    if (value && value._d) {
      console.warn(value._d);
    }
  };

  const addAddress = (response) => {
    setState({ ...state, streetName: response.logradouro });
  };

  const onSearchPostalNumber = (value) => {
    if (value) {
      api
        .get(`/ws/${value}/json/`)
        .then((response) => addAddress(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }
  };

  React.useEffect(() => {
    console.warn(state);
  });

  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 720, margin: 10 }}
      >
        <Row>
          <Col sm={24} xs={24} align="middle">
            <Title>Formulário de Criação de Usuário</Title>
            <Col sm={24} xs={24} align="middle">
              <Form
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 8,
                }}
                layout="horizontal"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Nome"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira um nome.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item label="CPF" name="federalDocument">
                  <Input />
                </Form.Item>

                <Form.Item
                  label="RG"
                  name="stateDocument"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira um RG.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="gender"
                  label="Gênero"
                  rules={[
                    {
                      required: true,
                      message: "Gênero é necessário.",
                    },
                  ]}
                >
                  <Select
                    placeholder="Selecione uma opção"
                    onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="male">Masculino</Option>
                    <Option value="female">Feminino</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 2,
                  }}
                  label="Data de Nascimento"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <DatePicker onChange={onChangeDatePicker} />
                </Form.Item>

                <Form.Item
                  label="Telefone ou Celular"
                  name="telephone"
                  rules={[
                    {
                      required: true,
                      message:
                        "Por favor insira um número de telefone ou celular.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="CEP"
                  name="postalNumber"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira um CEP.",
                    },
                  ]}
                >
                  <Search
                    placeholder="Insira o CEP para busca"
                    onSearch={onSearchPostalNumber}
                  />
                </Form.Item>

                <Form.Item
                  label="Logradouro e Número"
                  name="streetName"
                  value={state.logradouro}
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira uma rua.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Bairro"
                  name="districtName"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira um bairro.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Cidade"
                  name="cityName"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira uma cidade.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Estado"
                  name="stateName"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira o estado.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Enviar
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default CreatePage;
