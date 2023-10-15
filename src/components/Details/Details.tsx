import React, { useState } from "react";
import { Button, Input, Typography, Form, Select, Space } from "antd";

type DetailsProps = {
  handleNext: () => void;
};

const Details: React.FC<DetailsProps> = ({ handleNext }) => {
  const options = [
    {
      value: "+2 (100) 123-34567",
      label: <img src="/imgs/egypt.png" alt='egypt' width="10px" height="10px" />,
    },
    {
      value: "+45 (000) 123-345",
      label: <img src="/imgs/english.png" alt='english' width="10px" height="10px" />,
    },
  ];

  const [phone, setPhone] = useState(options[0].value);

  const submitFormData = () => {
    handleNext();
  };

  const handleChange = (value: string) => {
    setPhone(value);
  };

  return (
    <Form onFinish={submitFormData} layout="vertical">
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Space.Compact style={{ width: "100%" }}>
          <Select
            defaultValue={options[0].value}
            options={options}
            style={{ width: "20%" }}
            onChange={handleChange}
          />
          <Input defaultValue={phone} />
        </Space.Compact>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input placeholder="Create a password " />
      </Form.Item>

      <Typography style={{ marginTop: "-18px" }}>
        Must be at least 8 characters.
      </Typography>

      <Button type="primary" htmlType="submit">
        Get started
      </Button>

      <Typography style={{ textAlign: "center" }}>
        Already have an account? <a>Login</a>
      </Typography>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <span> عربى </span>
        <img src="/imgs/world.png" alt='world' />
      </div>
    </Form>
  );
};

export default Details;
