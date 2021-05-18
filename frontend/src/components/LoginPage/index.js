import {
  Form,
  Input,
  Button,
  Checkbox,
  Layout,
  Row,
  Col,
  Typography,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginPage = () => {
  const { Content } = Layout;
  const { Title } = Typography;
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360, margin: 10 }}
      >
        <Row>
          <Col sm={24} xs={24} align="middle">
            <Title>Página de Login</Title>
            <Col sm={6} xs={6} align="middle">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira o usuário!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Usuário"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira a senha!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Senha"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Lembrar</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="/">
                    Esqueci a senha
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
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

export default LoginPage;
