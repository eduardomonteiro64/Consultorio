import React from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Input,
  List,
  Button,
  Modal,
  Form,
} from "antd";
import axios from "axios";
import MaskedInput from "antd-mask-input";

const AppointmentPage = () => {
  const { Content } = Layout;
  const { Title } = Typography;

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

  const [state, setState] = React.useState({ appointments: "" });

  const onFinish = (values) => {
    axios
      .post("http://localhost:3003/api/userScheduleService", {
        time: values.time,
        date: values.date,
        name: values.name,
        stateDocument: values.stateDocument,
      })
      .then((resp) => resp);
  };

  const onFinishFailed = () => {
    alert("Faltam campos a serem preenchidos.");
  };

  const data = [
    "10 Horas - Consulta com Paciente 01",
    "11 Horas - Consulta com Paciente 02",
    "12 Horas - Consulta com Paciente 03",
    "13 Horas - Consulta com Paciente 04",
    "14 Horas - Consulta com Paciente 05",
  ];

  React.useEffect(() => {
    const todayDate = new Date().toISOString().slice(0, 10);
    axios
      .get(`http://localhost:3003/api/userScheduleService?date=${todayDate}`)
      .then((response) => {
        setState({ ...state, appointments: response.data });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 720, margin: 10 }}
      >
        <Row>
          <Col sm={24} xs={24} align="middle">
            <Title>Consultas do Dia</Title>
            <Col sm={22} xs={24} align="middle">
              {data && data.length > 1 ? (
                <List
                  header={
                    <div>
                      <b>Inicio do dia</b>
                    </div>
                  }
                  footer={
                    <div>
                      <b>Fim do dia</b>
                    </div>
                  }
                  bordered
                  dataSource={
                    state && state.appointments ? state.appointments : ""
                  }
                  renderItem={(item) => (
                    <List.Item>
                      <Typography>Hora da consulta: {item.time}</Typography>{" "}
                      <Typography.Text mark>
                        Nome do paciente: {item.name}
                      </Typography.Text>{" "}
                    </List.Item>
                  )}
                />
              ) : (
                ""
              )}

              <Col align="end" style={{ marginTop: 50 }}>
                <Button type="primary" onClick={showModal}>
                  Adicionar Consulta
                </Button>
                <Modal
                  title="Adicionar Consulta"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  cancelButtonProps={{ style: { display: "none" } }}
                  okButtonProps={{ style: { display: "none" } }}
                >
                  <Col>
                    <Form
                      name="basic"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                    >
                      <Form.Item label="Nome" name="name">
                        <Input />
                      </Form.Item>
                      <Form.Item label="RG" name="stateDocument">
                        <MaskedInput mask="11.111.111-1" />
                      </Form.Item>
                      <Form.Item label="Horário" name="time">
                        <input
                          id="time"
                          type="time"
                          min="09:00"
                          max="18:00"
                          required
                          pattern="[0-9]{2}:[0-9]{2}"
                        ></input>
                      </Form.Item>
                      <Form.Item label="Dia" name="date">
                        <MaskedInput
                          mask="1111-11-11"
                          placeholder="Ano/Mes/Dia"
                        />
                      </Form.Item>
                      <Button type="primary" htmlType="submit">
                        Enviar
                      </Button>
                    </Form>
                  </Col>
                </Modal>
              </Col>
            </Col>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default AppointmentPage;
