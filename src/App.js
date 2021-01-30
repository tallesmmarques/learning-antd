import React, { useState } from "react";
import { Layout, Menu, Typography, Alert, Space } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import FormComponent from "./Form";

const { Header, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <Layout className="page">
      <Sider collapsible={false} collapsed={visible}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            visible ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Space direction="vertical">
            <Title>Hello Ant Design</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              aliquet eros sit amet fermentum faucibus. Mauris interdum dolor
              sed ex accumsan posuere. Praesent rhoncus dolor nec felis
              lobortis, id tincidunt massa posuere. Nulla aliquet est tortor, a
              tincidunt justo imperdiet vitae. Nunc et porta lorem. Integer non
              varius ligula, quis viverra sem. In pulvinar feugiat fermentum.
              Mauris accumsan sagittis nisi in aliquet. Curabitur facilisis
              sodales libero. Cras mattis condimentum elementum. Nam euismod
              felis luctus neque ornare, vitae cursus ante feugiat.
            </Paragraph>
            <Paragraph>
              Mauris faucibus neque at leo luctus ultrices. Aenean id magna at
              diam aliquam ornare non sit amet erat. Nulla vitae lacus sit amet
              purus iaculis consectetur ac quis odio. Nunc rutrum viverra
              consectetur. Donec auctor diam sed congue gravida. Curabitur sed
              sodales libero, et venenatis ipsum. Etiam elementum ut nisl a
              pharetra. Donec nibh mi, pretium id nisl in, luctus pellentesque
              felis. Ut luctus, risus tincidunt scelerisque cursus, nunc mauris
              rhoncus augue, in sodales elit odio id nisl. Pellentesque accumsan
              pulvinar hendrerit. Phasellus mollis purus scelerisque ipsum
              semper, nec dapibus dui mollis. Aliquam lectus tellus, aliquet vel
              faucibus in, congue eget orci. Sed pretium, mi eget blandit
              volutpat, metus quam pretium enim, quis eleifend nibh mauris et
              dui. Aliquam auctor malesuada nulla, a ullamcorper neque fermentum
              nec.
            </Paragraph>

            <Alert
              message="Success Tips"
              description="Detailed description and advice about successful copywriting."
              type="success"
              showIcon
            />

            <FormComponent />
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
