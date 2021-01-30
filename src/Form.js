import { Form, Input, Button } from "antd";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
};

const FormComponent = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={["user", "introduction"]} label="Introduction">
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
