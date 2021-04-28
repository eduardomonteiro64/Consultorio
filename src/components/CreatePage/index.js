import React from "react";
import { Layout } from "antd";

const CreatePage = (props) => {
  const { Content } = Layout;
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 720, margin: 10 }}
      >
        Create Page
      </div>
    </Content>
  );
};

export default CreatePage;
